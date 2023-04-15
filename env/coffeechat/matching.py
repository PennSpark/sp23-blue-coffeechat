import sqlite3
import shutil
import datetime
import os
import random

def backup_db(db_file):
    timestamp = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
    backup_dir = 'old_db'
    backup_file = os.path.join(backup_dir, f'db_backup_{timestamp}.sqlite3')
    shutil.copyfile(db_file, backup_file)
    print(f"Database backup created successfully: {backup_file}")

def match_profiles(db_file):
    # Connect to the SQLite database
    conn = sqlite3.connect(db_file)
    c = conn.cursor()

    # Fetch all rows from core_profile table
    c.execute("SELECT * FROM core_profile")
    rows = c.fetchall()

    # Filter profiles with isMatchStarted = True and isMatched = False
    matched_profiles = [row for row in rows if row[9] and not row[10]]

    # Discard last profile if the total number of profiles is odd
    if len(matched_profiles) % 2 != 0:
        print("oh fuck")
        matched_profiles.pop()

    # Shuffle the matched_profiles list
    random.shuffle(matched_profiles)

    # Match profiles in pairs
    for i in range(0, len(matched_profiles), 2):
        profile1 = matched_profiles[i]
        profile2 = matched_profiles[i + 1]
        partner_username1 = profile2[12]
        partner_username2 = profile1[12]
        c.execute("UPDATE core_profile SET partnerUsername = ?, isMatched = ? WHERE id = ?", (partner_username1, True, profile1[0]))
        c.execute("UPDATE core_profile SET partnerUsername = ?, isMatched = ? WHERE id = ?", (partner_username2, True, profile2[0]))


    # Commit changes and close the database connection
    conn.commit()
    conn.close()

# Call the function with the SQLite file as argument
db_file = "db.sqlite3"
backup_db(db_file)  # Call backup_db() to create a backup of the original file
match_profiles(db_file)  # Call match_profiles() to perform profile matching

print("Profile matching completed.")
