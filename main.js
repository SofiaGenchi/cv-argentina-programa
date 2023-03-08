fetch("datos.json")
  .then((response) => response.json())
  .then((data) => {
    // Trabajar con los datos del archivo JSON aquí
    // console.log(data);
    const results = data.results[0];

    let cvHTML = "";

    cvHTML += `
  <h1 class="titulo">${results.name.first} ${results.name.last}</h1>
  <img class="img" src="${results.picture.large}" alt="Foto de ${results.name.first} ${results.name.last}">
`;

    cvHTML += `
    <section id="personal-info">
        <h2>Información personal</h2>
        <ul>
            <li>Edad: ${results.dob.age}</li>
            <li>Teléfono: ${results.phone}</li>
            <li>Correo electrónico: ${results.email}</li>
            <li>Dirección: ${results.location.street.number} ${results.location.street.name}, ${results.location.city}, ${results.location.state}, ${results.location.country}</li>
        </ul>
    </section>
`;
    document.getElementById("cv-container").innerHTML += cvHTML;
  })
  .catch((error) => console.error(error));
