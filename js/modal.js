const user = document.querySelector("#icon_user");



user.addEventListener("click", function () {
    Swal.fire({
        title: '<h4 class="title_login">Login now</h4>',
        html: '<div id="login" class="form"><form  action="mysuperscript.php" autocomplete="on"><label for="username" class="uname label" > Email Adress </label><input id="username" class="input" name="username" required="required" type="text" placeholder="Email"/><label for="password" class="youpasswd label"> Password</label><input id="password" name="password" class="input" required="required" type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe contener al menos un número y una letra minúscula y mayúscula, y al menos 8 o más caracteres"/><input type="submit" class="input submit_login" value="Sing in" /> <p class="change_link">Aún no eres miembro <a href="#toregister" class="links_login">Regístrate</a></p></form></div>',
        showConfirmButton:false
        
    })
});
