const avatar = document.getElementById("user_avatar");
const inputFoto = document.getElementById("fotoPerfil");

avatar.addEventListener("click", () => {
    inputFoto.click();
});

inputFoto.addEventListener("change", function () {
    const arquivo = this.files[0];

    if (arquivo) {
        const leitor = new FileReader();

        leitor.onload = function (e) {
            avatar.src = e.target.result;
        };

        leitor.readAsDataURL(arquivo);
    }
});

document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});