# Challenge 11 Formulario React & TypeScript

### Deploy https://202210-w11-miguelpgomez.netlify.app/

### SonarCloud https://sonarcloud.io/project/overview?id=mig-code_202210-w11-miguelpgomez

Crea con React un formulario de tres pasos.

En cada paso habrá un grupo de campos, y sólo se debe ver un paso a la vez.
Pon en cada paso un botón para navegar al siguiente y otro para navegar al anterior (en el primer paso no debe verse el botón de anterior).
En el tercer paso debe haber un botón "Acceder".
En cada paso, el botón para continuar al siguiente paso debe estar deshabilitado hasta que se rellenen todos los campos del paso.

Paso 1: Personal data.

    Name
    Last name
    BirthDate (cuando el usuario introduzca la fecha, al lado de este campo debe aparecer su edad en años)
    Gender (male/female/other/prefer not to mention) --> Radio button
    Email
    Desea recibir información de nuestra newsletter? --> Checkbox

Paso 2: Access data.

    Username
    Password
    Repeat password
    Account type (personal/pro/business) --> Tiene que ser un select

Paso 3: Confirmación.

    El usuario debe de ver todos los datos introducidos y confirmar que es correcto. Botón para confirmar.

Paso 4: Login.

    Username
    Password

Si los datos son incorrectos, se debe de mostrar un mensaje de error.

Si son correctos, se le debe mostrar una pantalla con todos los datos introducidos en el formulario (sería como un cuarto paso). Contraer

#### Next Features
    Check password are equals
    Not save confirm password
    Remove console.log
    Improve styles
    Improve validation messages
    Not showing error password when user doesn' exist

