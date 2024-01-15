import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdateUser = event => {
        event.preventDefault();
    const form = event.target;
    // console.log(form);

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;

    const updatedUser = { name, email, photoURL };
    fetch(`https://tauseef-backend.onrender.com/users/${loadedUser._id}`, {
        method:"PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    };

    return (
        <div className="f-container">
        <div>
          <h2>Update User from Here</h2>
          <form onSubmit={handleUpdateUser}>
            <input type="text" name="name" id="name" defaultValue={loadedUser?.name} />
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={loadedUser?.email}
            />
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Upload new profile picture"
            />
            <input type="submit" value="Update Profile" />
          </form>
        </div>
      </div>
    );
};

export default Update;
