export default function Profile() {
    return (
        <div>
            {this.state.profiles.map((profile, id) =>  (
            <div key={id}>
            <div >
                    <div>
                        <div className="profile-intro"><p><span>{profile.name}</span> - {profile.year}</p></div>

                        <p>{profile.desc}</p>

                        <p>{profile.image}</p>

                    </div>
            </div>
            </div>
            )
        )}
        </div>
    );
}