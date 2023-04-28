# Coffeechat

## Best Blue Project Spring 2023

<img width="431" alt="coffeechat" src="https://user-images.githubusercontent.com/77818146/235264325-f5541888-d0c8-4c57-8bcf-4a0dd49df428.png">

Academics and extracurriculars take up so much of a Penn student’s life, that meeting new people can be difficult.
Our solution? Coffeechat, an informal friendship matching site! Coffeechat is an easy way to befriend new people you wouldn’t otherwise meet.
Our inspiration comes from the Penn Marriage Pact - but platonic - mixed with the Penn Spark coffee chat system that newbies and oldies use to get to know one another.

Our goal is to create an accessible and easy-to-use platform that brings together and connects Penn students, diversify the perspectives of the student body through new friendships, and make socializing a little easier by removing some of the friction that comes with finding new friends.

---

![brewing](https://user-images.githubusercontent.com/77818146/235265485-75b674e7-79cf-4bf6-991b-115febfdbd22.gif)

Our site has a fully functioning account system, including account creation and sessions. The site seamlessly redirects users away from account pages if they're logged out. Additionally, the login/signup system has detailed error messages. Once the user registers successfully, they'll be prompted to create a profile.

![errors](https://user-images.githubusercontent.com/77818146/235265682-f9462308-3c02-4114-a873-1e32553e2f4c.gif)

Once enough users have signed up, the site administrators activate the matching script, which backs up the site database and then randomly matches pairs of users currently waiting for a match. Once a user receives their match, they can log in again to see information about them.

![match](https://user-images.githubusercontent.com/77818146/235265959-369e4740-17e0-4aa3-bc5d-566b678ef8a0.png)

Our project was created by a team of bootcamp students known as Blue Members from [Penn Spark](https://pennspark.org/), a community of students at the University of Pennsylvania that bridge tech and design to build both creative and client projects from ground-up.

Our Blue Developers are [Nick Cirillo](https://github.com/nick-cirillo) and [Kai Wang](https://github.com/kaiwang22). Our Blue Designers are [Isabelle Gu](https://github.com/isabellegu) and [Maliha Rahman](https://github.com/malihadrahman). We were mentored by Joyce He (Red Design) and [Anna Xia](https://github.com/annaanx24) (Red Developer).

After presenting our project at the Spring 2023 Penn Spark Showcase, we were awarded Best Blue Project.

---

To run Coffeechat, open two terminals. In the first, run `env/Scripts/activate` (Windows). Non-Windows users may need to create their own virtual environment. In `env/coffeechat`, run the command `python manage.py createsuperuser` and create an administrator. Then, run `python manage.py runserver` and follow the instructions to start the backend.

To start the frontend, navigate to `frontend/coffeechat` and run the command `npm start`.

To match users once at least two users have been created, navigate to `env/coffeechat` and execute `runMatch.bat` (Windows) or `python matching.py` on the terminal.

---

We hope you enjoyed checking out Coffeechat!
