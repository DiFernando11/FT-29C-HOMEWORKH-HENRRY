function getFriendsAll() {
  $("#lista").text("");
  $.get("http://localhost:5000/amigos", (response) => {
    response.forEach((result) => {
      $(`<li id="${result.id}"> ${result.name}</li> `).appendTo($("#lista"));
    });
  });
}
function getFriendsSearch() {
  let inputSearchValue = $("#input")[0].value;
  if (inputSearchValue) {
    $.get(`http://localhost:5000/amigos/${inputSearchValue}`, (response) => {
      $("#amigo").text(response.name);
    });
  } else {
    $("#amigo").text("Ingresa un ID");
  }
}
function deleteFriend() {
  let inputSearchValueDelete = $("#inputDelete")[0].value;
  let nameValue = "";

  if (inputSearchValueDelete) {
    $.get(
      `http://localhost:5000/amigos/${inputSearchValueDelete}`,
      (response) => {
        nameValue = response.name;
      }
    );
    $.ajax({
      url: `http://localhost:5000/amigos/${inputSearchValueDelete}`,
      type: "DELETE",
      success: () => $("#success").text(`${nameValue} fue borrado con exito`),
    });
    setTimeout(() => getFriendsAll(), 1000);
  } else {
    $("#success").text("Ingresa un ID");
  }
}

$("#boton").click(getFriendsAll);
$("#search").click(getFriendsSearch);
$("#delete").click(deleteFriend);

// $("search").click(() => {
//     return
// }
