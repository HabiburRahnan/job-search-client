import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="my-10">
      <Helmet>
        <meta charset="utf-8" />
        <title>Blog | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="relative border-s-8 border-[#3878E8] ps-3">
          <h2 className="text-xl md:text-3xl font-bold">
            access token and refresh token
          </h2>
          <p className="absolute bottom-0 text-5xl -z-10 opacity-5">
            access token and refresh token
          </p>
        </div>
        <p className="text-xl py-10">
          Normally, a user with an access token can only access protected
          resources or perform specific actions for a set period of time, which
          reduces the risk of the token being compromised. A refresh token
          allows the user to get a new access token without needing to log in
          again.
        </p>
      </div>
      <div>
        <div className="relative border-s-8 border-[#3878E8] ps-3">
          <h2 className="text-xl md:text-3xl font-bold">
            Access token and where should we store them on the client-side
          </h2>
          <p className="absolute bottom-0 text-5xl -z-10 opacity-5">
            Access token and where should we store them on the client-side
          </p>
        </div>
        <p className="text-xl py-10">
          The access token allows for access to different APIs and protected
          resources. The refresh token lets you mint new access tokens. The id
          token from OpenID Connect (OIDC) is used by the client to display
          information about the user.
        </p>
      </div>
      <div>
        <div className="relative border-s-8 border-[#3878E8] ps-3">
          <h2 className="text-xl md:text-3xl font-bold">express js</h2>
          <p className="absolute bottom-0 text-5xl -z-10 opacity-5">
            express js
          </p>
        </div>
        <p className="text-xl py-10">
          Web Applications Express is a minimal and flexible Node.js web
          application framework that provides a robust set of features for web
          and mobile applications. APIs With a myriad of HTTP utility methods
          and middleware at your disposal, creating a robust API is quick and
          easy. Performance Express provides a thin layer of fundamental web
          application features, without obscuring Node.js features that you know
          and love. Frameworks Many popular frameworks are based on Express.
        </p>
      </div>
      <div>
        <div className="relative border-s-8 border-[#3878E8] ps-3">
          <h2 className="text-xl md:text-3xl font-bold">Nest JS</h2>
          <p className="absolute bottom-0 text-5xl -z-10 opacity-5">Nest JS</p>
        </div>
        <p className="text-xl py-10">
          EXTENSIBLE Gives you true flexibility by allowing use of any other
          libraries thanks to modular architecture. VERSATILE An adaptable
          ecosystem that is a fully-fledged backbone for all kinds of
          server-side applications. PROGRESSIVE Takes advantage of latest
          JavaScript features, bringing design patterns and mature solutions to
          Node.js world.
        </p>
      </div>
      <div>
        <div className="relative border-s-8 border-[#3878E8] ps-3">
          <h2 className="text-xl md:text-3xl font-bold">
            Front-End (React with Tailwind CSS, material and DaisyUI ):
          </h2>
          <p className="absolute bottom-0 text-5xl -z-10 opacity-5">
            Front-End (React with Tailwind CSS, material and DaisyUI ):
          </p>
        </div>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">
            Set Up a React Project:
          </span>
          i Create a new React project using a tool like Create React App.
          Install and set up Tailwind CSS and DaisyUI in your project.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">
            Design User Interface:{" "}
          </span>
          I am usinsg Design the user interface for your website. You can create
          components for job listings, job application forms, user registration,
          and login forms.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">
            Integrate Firebase Authentication:
          </span>
          Use Firebase Authentication to handle user registration and login. Set
          up routes for protected content that require authentication.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">Fetch Job Listings::</span>
          Create components to fetch and display job listings from your back-end
          (which will be set up using Express and MongoDB).
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">Job Application:</span>
          Design and implement forms for job applications. Utilize Firebase
          Firestore or Realtime Database to store job applications along with
          applicant details.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">
            SweetAlert2 Integration:
          </span>
          Enhance user experience with SweetAlert2 for displaying success
          messages, error messages, and confirmation dialogs after form
          submissions or other user interactions.
        </p>
      </div>

      <div>
        <div className="relative border-s-8 border-[#3878E8] ps-3">
          <h2 className="text-xl md:text-3xl font-bold">
            Back-End (Express with MongoDB, CORS, and JWT)
          </h2>
          <p className="absolute bottom-0 text-5xl -z-10 opacity-5">
            Back-End (Express with MongoDB, CORS, and JWT):
          </p>
        </div>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">Set Up Express Server:</span>
          Create an Express.js server for your back-end.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">Database (MongoDB):</span>
          Set up a MongoDB database to store job postings and user data. Define
          schemas and models for job postings and users.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">
            Create RESTful API Endpoints:
          </span>
          Create API endpoints for job postings, user registration, user login,
          and job applications. Implement CRUD (Create, Read, Update, Delete)
          operations for job postings and applications.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">
            Implement Authentication with JWT:
          </span>
          Use JSON Web Tokens (JWT) for user authentication. When a user logs
          in, provide them with a JWT token. Secure your routes by verifying JWT
          tokens for protected routes.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">CORS Configuration:</span>
          Configure Cross-Origin Resource Sharing (CORS) to allow your React
          front-end to make requests to the Express back-end.
        </p>
        <p className="text-xl py-5">
          <span className="text-2xl font-semibold">Server Deployment:</span>
          Deploy your Express server to a hosting service, such as Heroku or
          AWS. Configure environment variables to store sensitive data securely.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
