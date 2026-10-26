import type { LegalDoc } from './types';

// Spanish privacy policy, translated from privacy.en.ts. Legal and
// native-speaker review pending (Linear AIO-58).

const doc: LegalDoc = {
  title: 'Política de privacidad',
  description: 'Qué recoge Aiora, por qué, con quién lo comparte y cómo borrarlo.',
  updated: '19 de octubre de 2026',
  summaryTitle: 'En pocas palabras',
  summary: [
    'Recogemos lo que Aiora necesita para planificar tus días: tu cuenta, tus respuestas, tu plan, tus pensamientos y tus listas y, si las añades, tus fotos.',
    'Tus respuestas se envían a un modelo de IA para crear tu plan. Las fotos solo se envían si las usas con Plus. Tu nombre, tu correo y tus pensamientos nunca se envían a un modelo de IA.',
    'No vendemos tus datos ni mostramos anuncios.',
    'Puedes borrar tu cuenta y todo lo que contiene desde la app, y se elimina de nuestros servidores en un plazo de 30 días.',
  ],
  contentsLabel: 'En esta página',
  sections: [
    {
      id: 'who',
      title: 'Quiénes somos',
      body: [
        'Aiora es una app de planificación para iPhone y Android, con esta web en aioraspace.com. En esta política, «Aiora» y «nosotros» se refieren al equipo que la gestiona. Somos quienes deciden cómo se usan tus datos personales, lo que nos convierte en responsables del tratamiento según leyes de protección de datos como el RGPD.',
        'Las preguntas sobre privacidad van a support@aioraspace.com.',
      ],
    },
    {
      id: 'collect',
      title: 'Qué recogemos',
      body: [
        '**Tu cuenta.** Tu correo electrónico y una contraseña cifrada de forma segura con un hash, o el identificador que nos da Apple o Google cuando inicias sesión con ellos. Tu nombre, tu bio, tu foto de perfil y el idioma de la app, si los añades. Cuando te registras con correo, guardamos tu correo, tu nombre y tu contraseña cifrada durante un máximo de 24 horas mientras esperamos el código que te enviamos; tu cuenta solo se crea cuando lo introduces.',
        '**Usar Aiora como invitado.** Puedes empezar sin cuenta. Lo que haces como invitado se queda en tu dispositivo hasta que inicias sesión; antes de eso no se envía nada a nuestros servidores.',
        '**Tus respuestas.** Lo que le cuentas a Aiora cuando crea tu plan: tu género, tu franja de edad, tu trabajo, lo activos que son tus días, cada cuánto entrenas, tus objetivos y las notas que añadas.',
        '**Lo que planificas y escribes.** Tu horario, tus tareas y tus objetivos semanales y si los has cumplido, los pensamientos que vuelcas en Aiora y lo que decides hacer con ellos, tu lista de la compra y tus sesiones de concentración.',
        '**Fotos, si las añades.** Hasta tres fotos (cabeza, perfil y cuerpo entero), que se usan para ajustar tu plan. Añadir fotos es opcional y forma parte de Aiora Plus. Un modelo de IA las mira una vez y escribe una breve descripción de lo que sirve para tu plan (por ejemplo, tu piel y tu postura), que guardamos con tu perfil.',
        '**Suscripciones.** Si compras Aiora Plus: el plan que elegiste, su estado y su fecha de renovación, y la referencia de la transacción de Apple o Google. Nunca recibimos el número de tu tarjeta.',
        '**Sesiones iniciadas.** Para cada dispositivo en el que tienes la sesión iniciada, la dirección IP y los datos del dispositivo desde el que la iniciaste, para mantener tu cuenta segura y poder cerrar la sesión de un dispositivo.',
        '**Dispositivo y uso.** El identificador que necesitamos para enviarte notificaciones, la plataforma de tu dispositivo, cuántos planes has generado con IA este mes y eventos de uso de la app (por ejemplo, qué pantallas se abren y qué funciones se usan). Los eventos de uso describen lo que hiciste en la app, no lo que escribiste. En Android, si instalaste Aiora desde un enlace que alguien compartió, también registramos la campaña y el código de invitación de ese enlace.',
        '**Ubicación aproximada, si la permites.** Solo se usa para mostrar el tiempo en tu pantalla de inicio. Se envía a nuestro proveedor del tiempo, y el servicio de ubicación de tu teléfono puede convertirla en el nombre de un lugar. No la guardamos.',
        '**Los mensajes que nos envías.** Si nos escribes, guardamos la conversación para poder ayudarte.',
      ],
    },
    {
      id: 'use',
      title: 'Cómo lo usamos y en qué nos basamos',
      body: [
        {
          table: {
            head: ['Lo que hacemos', 'Base legal'],
            rows: [
              ['Gestionar tu cuenta, sincronizar tu plan y tus listas entre dispositivos y mantenerlos a salvo', 'Prestar el servicio que pediste (contrato)'],
              ['Crear y rehacer tu plan con IA a partir de tus respuestas', 'Contrato'],
              ['Usar tus fotos para ajustar tu plan', 'Tu consentimiento, que la app te pide antes de que añadas fotos'],
              ['Enviar recordatorios y notificaciones', 'Tu consentimiento, mediante el permiso de notificaciones de tu dispositivo'],
              ['Enviar correos de la cuenta (códigos de registro, cambio de contraseña)', 'Contrato'],
              ['Procesar y verificar las compras de Aiora Plus', 'Contrato, y conservar los registros de facturación que exige la ley'],
              ['Entender cómo se usa Aiora y cómo la descubre la gente, para arreglarla y mejorarla', 'Nuestro interés legítimo en un producto que funcione'],
              ['Evitar abusos y mantener el servicio seguro, incluido que el primer plan gratis se dé una sola vez por persona', 'Nuestro interés legítimo en la seguridad y el uso justo'],
            ],
          },
        },
        'No usamos tus datos para publicidad, no creamos perfiles publicitarios y no vendemos ni alquilamos tus datos a nadie.',
      ],
    },
    {
      id: 'ai',
      title: 'La IA y tu plan',
      body: [
        'Cuando Aiora crea un plan, nuestro servidor envía tus respuestas (género, franja de edad, trabajo, actividad, entrenamiento, objetivos y notas) y el idioma de la app a un modelo de IA, que devuelve un horario.',
        'Trabajamos con varios proveedores de modelos de IA. Cuál crea cada plan depende de lo que el plan necesita y de lo ocupado que esté cada proveedor en ese momento: si uno no está disponible o está al límite, el siguiente atiende la petición. Si tienes Aiora Plus y has añadido fotos, tus fotos se envían una vez a un modelo capaz de leer imágenes, que escribe una breve descripción de ellas. Después tus planes se crean con tus respuestas y esa descripción, así que tus fotos no se vuelven a enviar salvo que las cambies.',
        'Sea cual sea el proveedor, el modelo de IA nunca recibe tu nombre, tu correo, tus pensamientos, tu lista de la compra ni tu historial de concentración. Lo que genera es una sugerencia: no es consejo médico, nutricional ni deportivo, y puedes cambiar cualquier parte de tu plan.',
        'Las sugerencias sobre dónde encaja un pensamiento (tarea, compra, objetivo o pensamiento) se calculan en tu dispositivo, sin IA y sin pasar por nuestros servidores.',
      ],
    },
    {
      id: 'share',
      title: 'Con quién lo compartimos',
      body: [
        'Usamos un número reducido de proveedores para que Aiora funcione. Tratan los datos en nuestro nombre y solo para los fines siguientes:',
        {
          table: {
            head: ['Proveedor', 'Para qué', 'Dónde'],
            rows: [
              ['Hetzner', 'Alojar nuestros servidores y nuestra base de datos, incluidas las fotos guardadas', 'Alemania (UE)'],
              ['Proveedores de modelos de IA (por ejemplo Groq y OpenRouter)', 'Generar planes a partir de tus respuestas, y describir tus fotos con Plus', 'Estados Unidos'],
              ['Google (Firebase)', 'Estadísticas de uso y ajustes remotos de la app', 'Estados Unidos'],
              ['OneSignal', 'Enviar notificaciones', 'Estados Unidos'],
              ['Brevo', 'Enviar correos de la cuenta', 'Francia (UE)'],
              ['OpenWeatherMap', 'El tiempo para tu ubicación aproximada', 'Reino Unido'],
              ['Apple, Google', 'Inicio de sesión, suscripciones compradas en sus tiendas y convertir una ubicación en el nombre de un lugar en tu teléfono', 'Estados Unidos'],
            ],
          },
        },
        'También podemos revelar datos si la ley lo exige, o para proteger los derechos y la seguridad de nuestros usuarios o del público.',
      ],
    },
    {
      id: 'transfers',
      title: 'Transferencias internacionales',
      body: [
        'Nuestros servidores están en la UE. Algunos de los proveedores anteriores tratan datos en otros países, entre ellos Estados Unidos. Cuando ocurre, nos basamos en las garantías que prevé la ley, como las cláusulas contractuales tipo de la Comisión Europea o el Marco de Privacidad de Datos UE-EE. UU.',
      ],
    },
    {
      id: 'retention',
      title: 'Cuánto tiempo lo guardamos',
      body: [
        {
          list: [
            'Tu cuenta y todo lo que contiene: mientras mantengas tu cuenta.',
            'Un registro con correo que nunca se confirma: un máximo de 24 horas.',
            'Cuando borras tu cuenta, se cierra tu sesión al momento y tus datos, fotos incluidas, se eliminan de forma permanente de nuestros servidores en un plazo de 30 días. Una foto que sustituyes o quitas, y la descripción escrita a partir de ella, se eliminan de la misma forma.',
            'Solo una cosa sobrevive a una cuenta borrada: una huella codificada de un solo sentido de tu correo o de tu identificador de inicio de sesión, con la que no se puede recuperar ninguno de los dos. Solo indica que ya se usó el primer plan gratis, para que borrar la cuenta y volver a registrarse no dé otro.',
            'Registros de suscripción y facturación: el tiempo que exijan las leyes fiscales y contables, separados del resto de tus datos.',
            'Estadísticas de uso: no más de 14 meses.',
            'Correos con nosotros: hasta dos años después de terminar la conversación.',
          ],
        },
      ],
    },
    {
      id: 'rights',
      title: 'Tus opciones y tus derechos',
      body: [
        'Puedes ver y editar tu plan, tus respuestas y tu perfil en la app cuando quieras, y borrar tu cuenta desde tu perfil en la app o en aioraspace.com/delete-account.',
        'Según dónde vivas, también tienes derecho a obtener una copia de tus datos, a corregirlos, a que se borren, a limitar u oponerte a su uso, a llevártelos y a retirar tu consentimiento en cualquier momento (por ejemplo, quitando tus fotos o desactivando las notificaciones). Escribe a support@aioraspace.com y te responderemos en un plazo de 30 días.',
        'Si estás en la UE o el Reino Unido, también puedes presentar una reclamación ante la autoridad de protección de datos de tu país.',
        'Borrar tu cuenta no cancela una suscripción comprada en la App Store o Google Play: cancélala en los ajustes de la tienda.',
      ],
    },
    {
      id: 'children',
      title: 'Menores',
      body: [
        'Aiora no está pensada para menores de 13 años, y no recogemos sus datos a sabiendas. En algunos países la edad mínima para usar apps como Aiora sin el consentimiento de un padre o madre es mayor; sigue las normas de donde vives. Si crees que un menor nos ha dado sus datos, escríbenos y los borraremos.',
      ],
    },
    {
      id: 'security',
      title: 'Seguridad',
      body: [
        'Los datos viajan entre la app y nuestros servidores por conexiones cifradas. Las contraseñas y los códigos de registro se guardan como hashes de un solo sentido, el acceso a los sistemas de producción está restringido y las sesiones usan tokens de corta duración. Ningún sistema es totalmente seguro, pero trabajamos para proteger tus datos y te avisaremos si una brecha te afecta.',
      ],
    },
    {
      id: 'changes',
      title: 'Cambios en esta política',
      body: [
        'Cuando cambiemos cómo tratamos tus datos, actualizaremos esta página y la fecha de arriba. Si el cambio es importante, también te avisaremos en la app antes de que entre en vigor.',
      ],
    },
    {
      id: 'contact',
      title: 'Contacto',
      body: ['Escribe a support@aioraspace.com con cualquier pregunta sobre tu privacidad o sobre esta política.'],
    },
  ],
};

export default doc;
