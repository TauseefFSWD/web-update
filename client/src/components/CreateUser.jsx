const CreateUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;

    const user = { name, email, photoURL };
    // console.log(user);
    fetch("https://tauseef-backend.onrender.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged > 0) {
          alert("User added successfully!");
          form.reset();
        }
      });
  };

  return (
    <div className="f-container">
      <div>
        <h2>ADD NEW USER</h2>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="name" placeholder="Your name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Entre your email here.."
          />
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Entre your photoURL here.."
          />
          <input type="submit" value="Add User" />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
