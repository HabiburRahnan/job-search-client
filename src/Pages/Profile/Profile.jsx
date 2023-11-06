import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Profile | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>this is profile</h1>
    </div>
  );
};

export default Profile;
