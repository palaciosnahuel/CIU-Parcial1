
# Chatbot , Parcial 1 

Crear un chatbot simple en React que utilice un servicio de AI para responder a las
preguntas de los usuarios.

Online en :
https://thriving-sunburst-6c3b2e.netlify.app/

### Requisitos

1. Interfaz de Usuario:
- La aplicación debe contar con un área donde se muestran los mensajes del chatbot y del usuario.
- Debe haber un campo de texto donde el usuario pueda escribir sus mensajes y un botón para enviarlos.

2. Comunicación con Dialogflow:

- Utiliza el token de acceso de Dialogflow para hacer llamadas directas desdeel frontend.
- La aplicación debe enviar el mensaje del usuario a Dialogflow y mostrar larespuesta del chatbot en la interfaz.

## Instalación🔧

Clonar e installar dependencias.

```bash
$ git clone https://github.com/palaciosnahuel/CIU-Parcial1.git
npm install 
```

## Ejecución 🚀

```cmd
npm run start
```


## Construido con 🛠️

* [React](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
* [Material UI](https://mui.com/) - Frammework CSS



## Solucion  🔩

Se divide en 
* src
  * Assets **(Contenido propuesto por MercadoLibre).**
  * Components **(Componentes de la app).**
  * Api **(Llamadas a la api).**

Se realizo un CustomHook (useChatBot.js) para manejar los mensajes.

Una clase (MessajeParser.js) para poder abstraer y controlar las respuestas en caso que en un futuro se necesite realizar modificaciones.

Un componente (MessagesBox) encargado de renderizar los mensajes.

Y un contenedor (Chatbot.js) encargado de unir estos modulos.

## Mejoras a futuro 📋
* Migrar a TypeScript (TSX)
* Utilizar la API Correcta.
* Agregar una interfaz que permita preguntar por voz

## Notas 📄
No se utilizo la API de DialogFlow por problemas con los token y la impementación de la misma, los materiales encontrados Online estan deprecados al día de hoy.
