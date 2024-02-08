// Notificaciones nátivas

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado)
         })
})

// const verNotificacionBtn = document.querySelector('#verNotificacion');
// verNotificacionBtn.addEventListener('click', () => {
//     if(Notification.permission == 'granted') {
//         new Notification('Esta es la notificación');
//     }
// })



const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission == 'granted') {
        const notificacion = new Notification('Esta es la notificación', { 
            icon: 'img/ccj.png',
            body: 'Código con Juan, los mejores tutoriales'
        });

        // Ir al sitio web de juan
        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com')
        }

    }
})