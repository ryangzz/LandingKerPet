Conexión entre Veterinarias y Usuarios de Mascotas (Kerpet)
1. Introducción
Este proyecto tiene como objetivo crear una plataforma integral que conecte a usuarios de mascotas con veterinarias y otros servicios relacionados con el cuidado de animales. La aplicación busca ser un espacio donde se puedan agendar citas veterinarias, gestionar servicios, y crear eventos comunitarios, fomentando una mejor atención y soporte para los dueños de mascotas.
El proyecto se construye sobre dos pilares fundamentales:
Acceso a servicios veterinarios especializados.
Creación y gestión de eventos comunitarios relacionados con mascotas.
2. Objetivo General
El objetivo principal de la aplicación es mejorar el acceso a servicios veterinarios y la organización de eventos comunitarios relacionados con mascotas. La aplicación ofrecerá herramientas para buscar veterinarias cercanas, agendar citas, recibir cotizaciones, y participar en eventos de la comunidad.
3. Objetivos Específicos
Búsqueda de veterinarias y servicios especializados: Facilitar la búsqueda de veterinarias cercanas con servicios específicos para diferentes especies de mascotas.
Gestión de citas: Permitir a los usuarios agendar citas con veterinarios de acuerdo a su disponibilidad y especialidad.
Cotizaciones y compras: Ofrecer a los usuarios la posibilidad de generar cotizaciones y realizar compras de productos o servicios veterinarios.
Eventos comunitarios: Habilitar la creación de eventos, ya sea para reuniones, carreras, adopciones o donaciones, fomentando la interacción entre los usuarios y las veterinarias.



4. Alcance del Producto Mínimo Viable (MVP)
Funcionalidades para Administradores (Veterinarias y Compañías)
Veterinarias (Compañías): CRUD para el registro de veterinarias (empresas), permitiendo gestionar su perfil, ubicación, horarios y servicios. En un futuro, se podría automatizar el proceso de registro.
Sucursales: Una veterinaria puede tener varias sucursales, las cuales estarán vinculadas a una compañía. Las sucursales tendrán la opción de gestionar sus servicios y disponibilidad de doctores.
Especies y Subespecies: Las veterinarias podrán seleccionar las especies y subespecies a las que brindan atención, facilitando la clasificación de los servicios que ofrecen.
Especialidades Veterinarias: Las veterinarias podrán gestionar qué especialidades ofrecen en cada sucursal, vinculándolas a los doctores disponibles.
Doctores: Las veterinarias podrán gestionar sus doctores (usuarios del sistema) asignando horarios, especialidades, y sucursales donde prestan sus servicios.
Servicios y Productos: Cada sucursal podrá registrar los servicios y productos que ofrece, con la posibilidad de personalizar nombres, precios y descripciones.
Promociones: Las veterinarias podrán crear campañas de marketing o promociones visibles para los usuarios.
Citas: Panel para gestionar la agenda de las veterinarias, permitiendo visualizar la disponibilidad de doctores y especialidades.
Cotizaciones: El manejo de cotizaciones es una forma de gestionar productos y servicios sin pasar por una pasarela de pago, viendo la posibilidad de que en un futuro se puedan procesar pagos.
Funcionalidades para los Usuarios
Registro y autenticación: Los usuarios podrán registrarse en la plataforma utilizando servicios de autenticación como Google.
Listado de Veterinarias Cercanas: Los usuarios podrán ver un listado de veterinarias cercanas y acceder a su perfil, servicios, especialidades, horarios y promociones.
Búsqueda avanzada: Los usuarios podrán buscar veterinarias por especialidad, ubicación, y especie de la mascota.
Gestión de citas: Los usuarios podrán agendar citas de acuerdo a la disponibilidad de doctores y veterinarias.
Find My Pet: Una funcionalidad donde los usuarios pueden reportar mascotas perdidas y recibir notificaciones de otros usuarios dentro de una zona geográfica determinada.
Eventos Comunitarios: Funcionalidad que permite a los usuarios y veterinarias organizar eventos como reuniones, carreras, adopciones o donaciones. Incluye:
Inscripciones a eventos: Los usuarios podrán inscribirse y participar en los eventos.
Donaciones: Permite a los usuarios realizar donaciones monetarias en eventos de recaudación.
Adopciones: Gestión de solicitudes de adopción de mascotas durante eventos.
Cotizaciones: Las  cotizaciones podrán ser exportadas o enviadas por correo electrónico a los usuarios como un PDF o archivo legible, lo que mejorará la experiencia del usuario al recibir las cotizaciones sin necesidad de acceder continuamente a la plataforma.

Catálogos y Entidades Clave
Especies y Subespecies: Catálogo que permitirá a las veterinarias y usuarios clasificar a las mascotas por especie y raza.
Mascotas: Los usuarios podrán registrar el perfil de sus mascotas, con detalles como nombre, edad, especie, subespecie, peso, sexo, y estado de salud (vacunas, esterilización).
Doctores y Especialidades: Los doctores estarán vinculados a las especialidades que ofrecen, facilitando la asignación de citas según la disponibilidad.
Servicios y Productos Veterinarios: Se podrán listar servicios generales y especializados ofrecidos por cada veterinaria, así como productos disponibles para la compra.
5. Funciones Adicionales Deseables
Además del MVP, se han identificado funcionalidades adicionales que podrían agregarse en fases posteriores:
API: Permitir la integración con otras plataformas mediante una API.
E-commerce: Habilitar la compra directa de productos veterinarios como alimentos y medicamentos.
Sistema de Notificaciones Internas (Veterinarias): Para gestionar notificaciones internas entre los diferentes roles de una veterinaria (administradores, doctores, recepcionistas, etc.), te propongo una entidad independiente de notificaciones internas que permita enviar avisos internos sobre citas, cambios en disponibilidad, o cualquier comunicación necesaria dentro del equipo de la veterinaria.
Manejo de Combos de Productos y Servicios: Para gestionar combos (conjuntos de productos o servicios a precio especial), lo ideal sería crear una nueva entidad que agrupe varios productos y/o servicios en un solo paquete con un precio conjunto.
6. Interconexión de Funcionalidades
Las funcionalidades estarán interconectadas para ofrecer una experiencia fluida e integrada. Por ejemplo:
Los usuarios podrán buscar veterinarias cercanas y, a su vez, gestionar citas, obtener cotizaciones y realizar compras.
Los eventos comunitarios estarán vinculados a la ubicación de los usuarios, permitiendo alertas geolocalizadas y participación en tiempo real.
7. Restricciones y Consideraciones Técnicas
Gestión de citas en tiempo real: El sistema deberá contar con un algoritmo eficiente para gestionar la disponibilidad de citas y servicios.
Seguridad: Se priorizará la seguridad de los datos personales de los usuarios, con especial atención en la protección de información médica y datos sensibles.
Geolocalización precisa: Se implementará geolocalización para eventos comunitarios y la funcionalidad de Find My Pet.

Casos de Uso para Administrador y Usuario con Mascota
1. Caso de Uso: Gestión de Veterinarias y Sucursales
Actor: Administrador (Veterinarias grandes, pequeñas o doctores independientes)
Descripción:
El administrador puede registrar y gestionar los detalles de la veterinaria, así como sus sucursales. Esto incluye datos como nombre, ubicación, horarios, y especialidades disponibles.
Funcionalidades:
CRUD para registrar, modificar, eliminar o ver veterinarias.
CRUD para registrar sucursales vinculadas a la veterinaria.
Asignación de doctores a sucursales y gestión de sus horarios.
Restricciones:
Solo los administradores pueden gestionar esta información.
Cada veterinaria puede tener múltiples sucursales, pero inicialmente el registro incluye una sucursal por defecto.
No se puede eliminar una veterinaria o sucursal si tiene citas o eventos activos asociados.

2. Caso de Uso: Gestión de Catálogos de Especies y Subespecies
Actor: Administrador
Descripción:
El administrador puede registrar y complementar el catálogo de especies y subespecies que atiende su veterinaria.
Funcionalidades:
Selección y personalización del catálogo de especies y subespecies que la veterinaria atiende.
Posibilidad de solicitar la inclusión de nuevas especies o subespecies.
Restricciones:
El catálogo general de especies y subespecies es gestionado por el sistema, pero cada veterinaria selecciona las especies que atiende.
Solo los administradores tienen acceso a gestionar este catálogo.

3. Caso de Uso: Gestión de Horarios y Disponibilidad
Actor: Administrador
Descripción:
El administrador gestiona la disponibilidad de los doctores y horarios de atención de la veterinaria.
Funcionalidades:
Asignar horarios a los doctores según sus especialidades y sucursales.
Cambiar y visualizar la disponibilidad de los doctores para la agenda de citas.
Restricciones:
No se puede modificar la disponibilidad de un doctor si tiene citas agendadas en ese horario.
Los cambios en la disponibilidad deben reflejarse en tiempo real en la plataforma para los usuarios con mascotas.

4. Caso de Uso: Gestión de Citas
Actor: Administrador
Descripción:
El administrador puede visualizar y gestionar las citas registradas por los usuarios.
Funcionalidades:
Ver citas agendadas por los usuarios.
Cambiar el estado de las citas (confirmar, cancelar, completar).
Enviar notificaciones sobre cambios de citas a los usuarios.
Restricciones:
No se puede cancelar una cita si está confirmada sin previo aviso al usuario.
El estado de la cita debe reflejarse en tiempo real en el sistema.

5. Caso de Uso: Gestión de Promociones y Servicios
Actor: Administrador
Descripción:
El administrador puede crear promociones y servicios personalizados para su veterinaria, y definir precios, descripciones, y condiciones.
Funcionalidades:
CRUD para servicios veterinarios ofrecidos.
Registro de promociones o campañas de marketing.
Restricciones:
Las promociones deben tener fechas de inicio y fin definidas.
Los servicios deben tener precios claros y consistentes entre sucursales.
No se pueden borrar promociones si tienen transacciones asociadas activas.

6. Caso de Uso: Gestión de Clientes y Mascotas
Actor: Administrador
Descripción:
El administrador tiene acceso a la lista de clientes registrados en su veterinaria y puede gestionar los perfiles de las mascotas de estos clientes.
Funcionalidades:
Ver y gestionar la lista de clientes y sus mascotas.
Añadir o modificar detalles de las mascotas (vacunas, historial médico, etc.).
Restricciones:
Solo se puede modificar la información de clientes y mascotas si estos están registrados en la base de datos de la veterinaria.
No se puede eliminar el perfil de una mascota si está asociada a citas activas.

7. Caso de Uso: Ver Veterinarias, Servicios y Promociones
Actor: Usuario con Mascota
Descripción:
El usuario con mascota puede navegar por la lista de veterinarias disponibles, ver sus servicios, especialidades y promociones activas.
Funcionalidades:
Ver la lista de veterinarias cercanas y sus servicios.
Filtrar veterinarias por ubicación, especialidad, y especies atendidas.
Ver promociones activas.
Restricciones:
Los usuarios solo pueden ver promociones activas y disponibles en su área geográfica.
Las veterinarias y servicios mostrados deben estar actualizados en tiempo real.

8. Caso de Uso: Creación de Eventos Comunitarios
Actor: Usuario con Mascota
Descripción:
El usuario puede crear eventos comunitarios como carreras, reuniones, adopciones o eventos de donación.
Funcionalidades:
Crear y personalizar eventos comunitarios.
Publicar eventos para que otros usuarios puedan unirse.
Restricciones:
Los eventos deben tener una fecha de inicio y fin, y estar geolocalizados dentro de un radio definido.
Solo los eventos activos serán visibles para otros usuarios.
9. Caso de Uso: Iniciar Evento de Búsqueda (Find My Pet)
Actor: Usuario con Mascota
Descripción:
El usuario puede iniciar un evento de búsqueda para reportar una mascota perdida y alertar a otros usuarios cercanos.
Funcionalidades:
Crear un evento para buscar una mascota perdida.
Enviar notificaciones a otros usuarios en un radio geográfico.
Restricciones:
Solo se puede crear un evento de búsqueda por mascota a la vez.
El evento debe incluir una descripción detallada y, de ser posible, una imagen de la mascota.

10. Caso de Uso: Agendar Cita Veterinaria
Actor: Usuario con Mascota
Descripción:
El usuario con mascota puede buscar disponibilidad y agendar una cita en una veterinaria específica con un doctor de una especialidad particular.
Funcionalidades:
Buscar veterinarias disponibles según ubicación y especialidad.
Agendar una cita con un doctor específico.
Recibir confirmación de la cita.
Restricciones:
Solo se puede agendar una cita en horarios disponibles.
El usuario no puede agendar dos citas simultáneamente en la misma veterinaria.

11. Caso de Uso: Crear Cotizaciones de Productos y Servicios
Actor: Usuario con Mascota
Descripción:
El usuario puede generar cotizaciones personalizadas basadas en los productos o servicios disponibles en las veterinarias.
Funcionalidades:
Seleccionar productos y servicios de una veterinaria.
Generar y guardar una cotización.
Restricciones:
Las cotizaciones deben incluir el precio final, impuestos, y detalles de la veterinaria.
Solo se pueden generar cotizaciones para productos y servicios disponibles en ese momento.

12. Caso de Uso Gestión de Combos de Productos y Servicios
Actor: Administrador de Veterinaria
Descripción:
El administrador de la veterinaria puede crear, modificar y eliminar combos de productos y/o servicios para ofrecer paquetes especiales a los clientes.
Flujo Principal:
Crear Combo:
El administrador accede a la sección de Combos en el panel de administración.
Selecciona la opción de Crear Nuevo Combo.
Introduce el nombre y la descripción del combo.
Selecciona los productos y servicios que desea incluir en el combo.
Define la cantidad de cada producto o servicio que se incluirá.
Establece el precio especial para el combo.
Guarda el combo, que se almacena en el sistema como un paquete disponible para los usuarios.
Modificar Combo:
El administrador selecciona un combo existente.
Modifica los detalles (nombre, productos, servicios, precio).
Guarda los cambios.
Eliminar Combo:
El administrador selecciona un combo.
Elige la opción de eliminar.
Confirma la eliminación.
El combo se elimina del sistema y ya no está disponible para los usuarios.
Restricciones:
Solo los administradores pueden gestionar los combos.
No se pueden eliminar combos que estén vinculados a cotizaciones activas.
Extensiones:
Publicar Promociones: Los combos pueden ser parte de promociones o descuentos por tiempo limitado.

13. Caso de Uso: Solicitar Cotización de Productos y Servicios
Actor: Usuario con Mascota
Descripción:
El usuario con mascota puede solicitar una cotización de productos y servicios veterinarios (incluyendo combos) para saber el costo antes de proceder con la compra.
Flujo Principal:
Solicitar Cotización:
El usuario navega por la lista de productos y servicios disponibles en la veterinaria.
Selecciona los productos y/o servicios (incluyendo combos si están disponibles) que desea cotizar.
Accede a la sección de Cotización.
Revisa el resumen de los productos/servicios seleccionados, con los precios desglosados.
Confirma la solicitud de cotización.
El sistema genera una cotización, que incluye el subtotal, impuestos (si aplican), y el total a pagar.
Visualización de Cotización:
El usuario puede ver todas las cotizaciones activas que ha solicitado.
Accede a los detalles de una cotización específica.
Puede descargar o imprimir la cotización.
Restricciones:
Los usuarios no pueden modificar los precios de los productos o servicios.
No se puede solicitar una cotización con productos fuera de stock.
Extensiones:
Guardar Cotización: El usuario puede guardar la cotización para revisarla más tarde.
Envió de Cotización por Correo: La cotización puede ser enviada al correo electrónico del usuario en formato PDF.

14. Caso de Uso: Aceptar o Rechazar una Cotización
Actor: Administrador de Veterinaria
Descripción:
El administrador o gerente de la veterinaria revisa las cotizaciones solicitadas por los usuarios y puede aprobarlas o modificarlas según los productos/servicios disponibles.
Flujo Principal:
Revisar Cotización:
El administrador accede a la sección de Cotizaciones en su panel.
Visualiza una lista de cotizaciones pendientes.
Selecciona una cotización específica.
Revisa los productos/servicios solicitados por el usuario.
Aceptar Cotización:
Si todo está en orden, el administrador aprueba la cotización.
El usuario recibe una notificación de que su cotización ha sido aprobada.
El estatus de la cotización cambia a Aceptada.
Rechazar Cotización:
Si hay un problema (por ejemplo, falta de stock), el administrador rechaza la cotización.
El usuario recibe una notificación explicando por qué fue rechazada.
El estatus de la cotización cambia a Rechazada.
Restricciones:
Solo los administradores o gerentes pueden aceptar o rechazar cotizaciones.
Una cotización aceptada no puede ser modificada por el usuario.
Extensiones:
Modificación de Cotización: El administrador puede modificar la cotización antes de aceptarla (por ejemplo, cambiar productos según la disponibilidad).

15. Caso de Uso:  Envío de Notificaciones Internas
Actor: Gerente, Administrador, Doctor
Descripción:
Los diferentes roles dentro de la veterinaria pueden enviarse notificaciones internas entre ellos para gestionar cambios de citas, horarios o cualquier comunicación interna necesaria.
Flujo Principal:
Envío de Notificación por Cambios en Citas:
El administrador o recepcionista detecta que una cita ha sido modificada o cancelada.
Accede al panel de Notificaciones Internas.
Selecciona el doctor responsable de la cita.
Escribe un mensaje informando del cambio (e.g., "La cita del 24 de abril ha sido cancelada").
Envía la notificación.
Envío de Notificación por Cambio de Horario:
El gerente ajusta los horarios de un doctor.
Accede a la sección de Notificaciones Internas.
Selecciona el doctor cuyo horario fue modificado.
Escribe un mensaje indicando el nuevo horario.
Envía la notificación.
Revisión de Notificaciones:
El doctor o recepcionista recibe una notificación en su panel de usuario.
Accede a la sección de Notificaciones Recibidas.
Revisa el mensaje y marca la notificación como leída.
Restricciones:
Solo los administradores y gerentes pueden enviar notificaciones sobre cambios en horarios o citas.
Los doctores y recepcionistas pueden recibir notificaciones, pero no modificarlas.
Extensiones:
Notificaciones Automáticas: Las notificaciones pueden ser enviadas automáticamente cuando una cita cambia, sin intervención manual.

16. Caso de Uso: Recepción y Gestión de Notificaciones Internas
Actor: Doctor, Recepcionista, Administrador
Descripción:
Los doctores y recepcionistas reciben notificaciones internas y las gestionan según sea necesario.
Flujo Principal:
Recepción de Notificación:
El doctor inicia sesión en su cuenta.
Ve una notificación en su panel de usuario que indica un cambio en una cita o en su horario.
Accede a la sección de Notificaciones para ver los detalles.
Marcar como Leída:
El doctor revisa el mensaje y confirma que ha leído la notificación.
Marca la notificación como leída, lo que actualiza el estado en el sistema.
Tomar Acción:
Si la notificación requiere una acción (e.g., una cita cancelada), el doctor puede preparar una respuesta o ajustar su horario.
Restricciones:
Los doctores y recepcionistas no pueden modificar el contenido de las notificaciones.
Solo pueden marcar notificaciones como leídas o no leídas.
17. Caso de Uso: Organizar Evento de Donaciones
Actor: Administrador de Veterinaria o Usuario
Descripción:
El administrador de la veterinaria o un usuario organiza un evento comunitario con el objetivo de recaudar fondos para una causa específica relacionada con el cuidado de mascotas.
Flujo Principal:
Creación del Evento de Donaciones:
El organizador accede al panel de Eventos Comunitarios.
Selecciona la opción de Crear Nuevo Evento.
Completa los campos requeridos: nombre del evento, descripción, fecha de inicio y fin, ubicación (si aplica), y coordenadas (opcional).
En el campo tipo_evento, selecciona la opción Donación.
Introduce la meta_donacion (el monto objetivo que desean recaudar).
Define el cupo_maximo (si hay un límite de participantes) o deja este campo vacío si no aplica.
Guarda el evento, que estará disponible para que otros usuarios puedan unirse y donar.
Participación en el Evento de Donaciones:
Los usuarios navegan en la sección de Eventos Comunitarios y seleccionan el evento de donación.
Revisan la información del evento y pueden ver la meta de donación.
Seleccionan la opción de Donar.
Introducen el monto que desean donar y confirman.
Reciben una confirmación de su donación.
Revisión de las Donaciones:
El organizador del evento puede acceder al evento y revisar las donaciones recibidas en la sección de Donaciones del Evento.
Puede ver la lista de usuarios que han donado (si no lo hicieron de manera anónima) y el monto total recaudado.
Restricciones:
Solo los administradores o usuarios autorizados pueden crear eventos de donaciones.
No se puede cancelar un evento si ya se han recibido donaciones.
Extensiones:
Meta Alcanzada: El organizador puede establecer que el evento finalice automáticamente una vez que se alcance la meta de donación.
Notificaciones Automáticas: Los usuarios que hayan donado pueden recibir notificaciones cuando la meta de donación esté cerca de alcanzarse o cuando se complete.

18. Caso de Uso: Organizar Evento de Adopciones
Actor: Administrador de Veterinaria o Usuario
Descripción:
El administrador de la veterinaria o un usuario organiza un evento de adopción de mascotas, donde otros usuarios pueden inscribirse para participar y adoptar mascotas.
Flujo Principal:
Creación del Evento de Adopciones:
El organizador accede al panel de Eventos Comunitarios.
Selecciona la opción de Crear Nuevo Evento.
Completa los campos requeridos: nombre del evento, descripción, fecha de inicio y fin, ubicación (si aplica), y coordenadas (opcional).
En el campo tipo_evento, selecciona la opción Adopción.
Define el cupo_maximo de participantes y la meta_adopciones (número de mascotas que se espera sean adoptadas).
Guarda el evento, que estará disponible para que los usuarios se inscriban.
Participación en el Evento de Adopciones:
Los usuarios navegan en la sección de Eventos Comunitarios y seleccionan el evento de adopción.
Revisan la información del evento y ven las mascotas disponibles para adopción.
Se inscriben en el evento para asistir al día y hora del evento.
Durante el evento, los usuarios pueden interactuar con las mascotas y seleccionar una mascota para adoptar.
Finalización del Evento:
El organizador revisa la meta_adopciones al final del evento.
Si la meta ha sido alcanzada o si se ha completado el tiempo del evento, puede marcar el evento como Finalizado.
Los usuarios que participaron en la adopción pueden recibir notificaciones de seguimiento sobre la mascota que adoptaron.
Restricciones:
Solo los administradores o usuarios autorizados pueden organizar eventos de adopciones.
El evento no puede ser cancelado una vez que se ha adoptado una mascota.
Extensiones:
Seguimiento de Adopciones: Los usuarios que adoptaron una mascota pueden recibir notificaciones de seguimiento post-adopción (e.g., vacunas, controles).
Certificado de Adopción: Al finalizar el evento, los usuarios que adoptaron una mascota pueden recibir un certificado digital de adopción.

19. Caso de Uso: Organizar Carrera de Mascotas
Actor: Administrador de Veterinaria o Usuario
Descripción:
El administrador de la veterinaria o un usuario organiza una carrera de mascotas, donde otros usuarios pueden inscribir a sus mascotas para participar.
Flujo Principal:
Creación del Evento de Carrera:
El organizador accede al panel de Eventos Comunitarios.
Selecciona la opción de Crear Nuevo Evento.
Completa los campos requeridos: nombre del evento, descripción, fecha de inicio y fin, ubicación (pista de la carrera), y coordenadas.
En el campo tipo_evento, selecciona la opción Carrera.
Define el cupo_maximo de participantes (número de mascotas que pueden inscribirse).
Guarda el evento, que estará disponible para que los usuarios se inscriban con sus mascotas.
Inscripción en el Evento de Carrera:
Los usuarios acceden a la sección de Eventos Comunitarios y seleccionan la carrera.
Revisan los detalles del evento y seleccionan la opción de Inscribir Mascota.
Seleccionan una de sus mascotas registradas y confirman la inscripción.
Reciben una confirmación de inscripción con la fecha y lugar del evento.
Desarrollo de la Carrera:
El día del evento, los participantes acuden al lugar especificado con sus mascotas.
Durante la carrera, los organizadores pueden registrar los tiempos de los participantes y determinar a los ganadores.
Finalización del Evento y Anuncio de Ganadores:
Al finalizar la carrera, los organizadores ingresan los resultados en el sistema.
Los participantes reciben notificaciones con los resultados de la carrera, incluyendo los ganadores.
Los ganadores pueden recibir un certificado o premio digital.
Restricciones:
Solo los administradores o usuarios autorizados pueden organizar carreras de mascotas.
No se puede inscribir una mascota que ya esté inscrita en otro evento en la misma fecha y hora.
Extensiones:
Resultados en Tiempo Real: Los resultados de la carrera pueden mostrarse en tiempo real dentro de la plataforma para los usuarios que no estén presentes físicamente.
Certificado de Participación: Los usuarios que participaron pueden recibir un certificado digital de participación.

12. Restricciones Generales:
Autenticación: Tanto administradores como usuarios con mascotas deberán estar autenticados para realizar cualquier acción en la plataforma.
Actualización en Tiempo Real: Los cambios en disponibilidad, citas, y eventos deben reflejarse en tiempo real en la plataforma.
Privacidad de Datos: La información personal de los usuarios, mascotas, y veterinarias debe estar protegida, y solo los administradores o usuarios autorizados pueden modificarla.
Geolocalización: Los eventos y servicios deben estar vinculados a una ubicación geográfica precisa, y las notificaciones deben respetar los radios de alcance definidos.


Para crear una plataforma confiable en la que tanto los administradores (veterinarias y doctores independientes) como los usuarios con mascotas puedan confiar entre sí, es importante establecer restricciones y validaciones que fomenten la transparencia, la autenticidad y la seguridad. A continuación, te presento restricciones y medidas que ayudarán a construir esa confianza mutua entre todos los actores de la plataforma:
13. Restricciones para la Confianza en Usuarios Registrados
1. Restricciones para Administradores (Veterinarias y Doctores Independientes)
a. Verificación de Identidad:
Descripción: Los administradores deben pasar por un proceso de verificación de identidad para validar que representan una veterinaria o son profesionales veterinarios registrados.
Restricción: Antes de poder crear promociones, gestionar servicios o interactuar con usuarios, las veterinarias o doctores independientes deberán enviar documentos oficiales (registro del negocio, licencia médica, certificaciones veterinarias) que serán verificados por el sistema.
Objetivo: Asegurar que solo veterinarias legítimas y profesionales certificados puedan interactuar con los usuarios y sus mascotas.
b. Verificación de Ubicación:
Descripción: Las veterinarias y sucursales deben registrar una dirección física verificable mediante geolocalización.
Restricción: No se permitirá el registro de una veterinaria o sucursal sin una ubicación confirmada (comprobada mediante servicios de geolocalización o documentos de registro).
Objetivo: Los usuarios con mascotas deben saber que las veterinarias que aparecen en el sistema son reales y se encuentran en las ubicaciones indicadas.
c. Políticas de Servicio y Términos Claros:
Descripción: Las veterinarias deben establecer políticas claras sobre la cancelación de citas, cambios en los servicios, y condiciones de las promociones.
Restricción: El administrador deberá definir términos y condiciones que se mostrarán a los usuarios antes de que puedan agendar citas o acceder a promociones.
Objetivo: Los usuarios confían en que sus citas y transacciones se manejarán de manera transparente y que no habrá cargos ocultos.
d. Valoración y Reseñas:
Descripción: Los usuarios con mascotas pueden dejar reseñas y valoraciones sobre la calidad de los servicios de una veterinaria o doctor independiente.
Restricción: Las veterinarias deben mantener una valoración promedio mínima para mantener su registro activo (por ejemplo, 3.5 estrellas). Las reseñas negativas deben ser revisadas por el administrador de la veterinaria para responder y mejorar el servicio.
Objetivo: Fomentar la confianza a través de la retroalimentación pública de otros usuarios.

2. Restricciones para Usuarios con Mascotas
a. Verificación de Identidad de los Usuarios con Mascotas:
Descripción: Para crear eventos como "Find My Pet" o para participar en adopciones o donaciones, los usuarios deben verificar su identidad.
Restricción: Los usuarios deberán validar su cuenta mediante un número de teléfono y una dirección de correo electrónico. Para eventos de adopción, también puede ser necesario el uso de documentos adicionales (como comprobantes de domicilio).
Objetivo: Asegurar que los usuarios son personas reales y confiables, lo que incrementa la confianza al interactuar con ellos.
b. Información Completa de la Mascota:
Descripción: Los usuarios deben proporcionar información completa y precisa de sus mascotas, incluyendo vacunas, historial médico, y foto actualizada.
Restricción: No se permitirá crear un perfil de mascota sin completar la información requerida (nombre, edad, raza, especie, sexo, vacunas, etc.).
Objetivo: Los veterinarios y otros usuarios pueden confiar en que la información proporcionada sobre las mascotas es precisa y auténtica.
c. Participación Responsable en Eventos Comunitarios:
Descripción: Los usuarios deben participar de manera responsable en eventos comunitarios como carreras, adopciones, y donaciones.
Restricción: Los usuarios que participen en eventos deberán cumplir con normas específicas, como la veracidad en las donaciones o el compromiso en adopciones. La falta de cumplimiento puede llevar a sanciones o prohibiciones de participar en futuros eventos.
Objetivo: Crear un entorno seguro donde los usuarios sepan que los eventos son legítimos y los participantes son responsables.
d. Historial de Buen Comportamiento:
Descripción: Los usuarios que tengan un historial negativo, como cancelar citas repetidamente o no asistir a eventos a los que se inscribieron, pueden ver limitadas sus interacciones.
Restricción: Un sistema de penalizaciones podrá ser implementado para usuarios con mala conducta (cancelaciones sin previo aviso, falta de pago, o comportamiento inapropiado en eventos).
Objetivo: Mantener la confianza de las veterinarias y otros usuarios, asegurando que quienes interactúan en la plataforma son confiables y responsables.

14. Confianza en la Interacción entre Usuarios con Mascotas y Veterinarias
a. Sistema de Valoración Mutua:
Descripción: Tanto los usuarios con mascotas como las veterinarias pueden valorarse mutuamente después de cada interacción (por ejemplo, tras una cita o evento).
Restricción: Se requerirá una valoración después de cada servicio. Los usuarios con una puntuación muy baja pueden ver limitadas sus interacciones futuras con ciertas veterinarias, y las veterinarias con bajas valoraciones perderán visibilidad en la plataforma.
Objetivo: Construir un sistema de confianza basado en la experiencia previa, donde ambas partes se evalúan.
b. Política de Seguridad de Datos:
Descripción: La plataforma debe cumplir con estándares de seguridad para proteger los datos personales y médicos de los usuarios y sus mascotas.
Restricción: Toda información personal y médica estará protegida bajo estándares de cifrado y no podrá ser compartida con terceros sin consentimiento explícito.
Objetivo: Fomentar la confianza en el manejo seguro y responsable de la información personal de los usuarios y las veterinarias.
c. Confirmación de Citas y Responsabilidad:
Descripción: Los usuarios con mascotas deben confirmar sus citas antes de asistir, y las veterinarias deben cumplir con los horarios agendados.
Restricción: Si un usuario no confirma una cita con antelación, la veterinaria podrá cancelar la cita. Las veterinarias no podrán cancelar citas confirmadas sin una razón válida.
Objetivo: Generar confianza en la seriedad de ambas partes al gestionar citas y compromisos.

15. Confianza entre Usuarios en el Contexto de Eventos como "Find My Pet"
a. Moderación de Eventos Comunitarios:
Descripción: Los eventos creados por los usuarios, especialmente en "Find My Pet", deben pasar por un proceso de revisión o moderación.
Restricción: La plataforma revisará automáticamente o manualmente los eventos reportados como sospechosos o engañosos antes de hacerlos visibles para otros usuarios.
Objetivo: Asegurar que los eventos de "Find My Pet" son genuinos y no son utilizados para fraudes o actividades maliciosas.
b. Reglas Claras para Interacción en "Find My Pet":
Descripción: Los usuarios que encuentren una mascota deben interactuar de manera respetuosa y clara con los dueños, proporcionando información precisa y pruebas como fotos o videos.
Restricción: Se podrán establecer restricciones a los usuarios que usen la plataforma de forma inadecuada (como hacer bromas o dar información falsa). Se podrán bloquear temporalmente hasta investigar la situación.
Objetivo: Fomentar la confianza entre los usuarios que colaboran para encontrar mascotas perdidas.

Definición de roles y permisos de la aplicación.

Rol Administrador (Veterinarias/Doctores Independientes)
Este rol corresponde a aquellos que gestionan las veterinarias, como empresas o doctores que operan de manera independiente. Este rol tiene acceso completo a la gestión de su veterinaria y todos los aspectos relacionados con servicios, citas, promociones, eventos y la interacción con los usuarios.
Permisos Exclusivos del Administrador:
Gestión de Veterinarias:
Crear, modificar y eliminar el perfil de la veterinaria.
Registrar, modificar y eliminar sucursales.
Asignar doctores a sucursales.
Definir horarios de atención de la veterinaria y disponibilidad de doctores.
Gestionar la especialización de la veterinaria (especialidades médicas, especies atendidas).
Gestión de Catálogos:
Agregar o modificar el catálogo de especies y subespecies atendidas.
Solicitar la inclusión de nuevas especies o subespecies.
Gestión de Servicios y Promociones:
Crear, modificar y eliminar servicios veterinarios.
Definir precios y condiciones de los servicios.
Crear y gestionar promociones (banners, descuentos).
Establecer términos de las promociones, su duración y condiciones.
Gestión de Citas:
Visualizar todas las citas agendadas por los usuarios.
Confirmar, reprogramar o cancelar citas.
Enviar notificaciones de cambios de citas a los usuarios.
Gestión de Clientes y Mascotas:
Visualizar el listado de clientes y mascotas registrados en la veterinaria.
Modificar detalles de las mascotas (historial médico, vacunas, etc.).
Consultar el historial de interacciones de los clientes con la veterinaria.
Gestión de Eventos Comunitarios:
Crear, gestionar y moderar eventos organizados por la veterinaria (reuniones, carreras, donaciones).
Revisar inscripciones y gestionar donaciones recibidas durante eventos.
Ver Valoraciones:
Consultar las valoraciones y reseñas que los usuarios han dejado sobre la veterinaria y los doctores.
Roles Jerárquicos y Permisos Internos en la Veterinaria
Rol Administrador de Veterinaria (Administrador Principal)
Este es el rol más alto en la jerarquía dentro de una veterinaria. Es responsable de la gestión completa de la veterinaria y sus sucursales, así como la administración de permisos de otros usuarios dentro de su entorno.
Permisos Exclusivos del Administrador de Veterinaria:
Gestión de Usuarios y Roles:
Asignar roles y permisos a los usuarios internos (gerentes, doctores, recepcionistas, asistentes).
Gestionar y modificar los permisos de cada usuario según su rol.
Gestión de Veterinarias y Sucursales:
Crear, modificar y eliminar veterinarias y sucursales.
Definir la estructura de la veterinaria (ubicación, especialidades, especies atendidas, etc.).
Gestión de Catálogos y Servicios:
Crear y modificar catálogos de especies, subespecies, servicios veterinarios y promociones.
Definir precios y condiciones de los servicios.
Crear y gestionar promociones y campañas de marketing.
Gestión de Horarios y Disponibilidad:
Establecer la disponibilidad de doctores y gestionar horarios generales.
Acceso Completo a Citas:
Ver, confirmar, modificar y cancelar citas.
Enviar notificaciones a los usuarios con mascotas.
Gestión de Eventos Comunitarios:
Crear y gestionar eventos comunitarios.
Acceso Completo a Datos de Clientes y Mascotas:
Ver y modificar los datos de los clientes y sus mascotas.

Rol Gerente de Veterinaria
El Gerente tiene un nivel de autoridad por debajo del Administrador Principal, pero aún puede gestionar operaciones clave dentro de la veterinaria. Este rol puede delegar y coordinar al personal de la veterinaria.
Permisos Exclusivos del Gerente:
Gestión de Usuarios Internos:
Asignar y modificar roles de doctores, recepcionistas y asistentes dentro de la sucursal.
Supervisar el comportamiento y las actividades de los empleados.
Gestión de Horarios y Disponibilidad:
Gestionar y confirmar la disponibilidad de los doctores y ajustar horarios según la demanda.
Gestión de Citas:
Confirmar o modificar citas.
Supervisar la agenda de la veterinaria.
Gestión de Promociones y Servicios:
Supervisar la implementación de promociones activas y ajustar precios de servicios.
Acceso a Datos de Clientes y Mascotas:
Ver el historial médico y de citas de las mascotas registradas en la veterinaria.
Restricciones:
No puede eliminar la veterinaria o sucursales.
No puede modificar los permisos de otros Gerentes o el Administrador Principal.

Rol Doctor Veterinario
El Doctor es el personal médico responsable de la atención directa de los pacientes. Sus permisos se enfocan en la gestión de citas, disponibilidad y la interacción con clientes y mascotas.
Permisos Exclusivos del Doctor:
Gestión de Disponibilidad:
Ajustar su disponibilidad de horarios en el sistema.
Actualizar su agenda según citas y disponibilidad de tiempo.
Confirmación de Citas:
Confirmar o modificar citas asignadas a su propio horario.
Interacción con Clientes y Mascotas:
Ver los datos médicos de las mascotas antes de las consultas.
Consultar el historial médico de las mascotas asignadas a sus citas.
Actualizar Historial Médico:
Actualizar la información médica de las mascotas después de una consulta o tratamiento (vacunas, diagnósticos, etc.).
Restricciones:
No puede modificar el catálogo de servicios o precios.
No puede crear promociones o campañas.
No puede gestionar los datos generales de clientes, solo ver los asignados a sus citas.

Rol Recepcionista
El Recepcionista es el personal encargado de la interacción directa con los usuarios con mascotas para la gestión de citas y la atención al cliente. Su rol es crucial para asegurar que las citas se manejen adecuadamente y que las consultas sean organizadas.
Permisos Exclusivos del Recepcionista:
Gestión de Citas:
Agendar citas para los usuarios que contacten a la veterinaria.
Confirmar la recepción de las citas y enviar recordatorios a los usuarios con mascotas.
Modificar o cancelar citas a solicitud de los usuarios o del personal médico.
Interacción con los Usuarios a través de Chat:
Atender los chats con los usuarios para coordinar citas, resolver dudas, y proporcionar asistencia básica.
Ver Datos Básicos de Clientes:
Ver la información de contacto de los usuarios con mascotas (número de teléfono, correo) para coordinar citas y servicios.
Restricciones:
No puede modificar los datos médicos de las mascotas.
No puede ver el historial médico de las mascotas.
No puede modificar los precios ni los servicios ofrecidos por la veterinaria.

Rol Asistente Veterinario
El Asistente Veterinario trabaja de la mano con los doctores y el personal de recepción para facilitar la preparación de consultas y la atención médica básica de las mascotas. Tiene permisos limitados y no puede modificar ni gestionar información crítica.
Permisos Exclusivos del Asistente:
Consulta de Horarios:
Ver la disponibilidad de los doctores y los horarios de citas asignadas.
Preparación de Consultas:
Acceder a los datos básicos de las mascotas para preparar consultas (e.g., nombre, edad, especie).
Asistencia en Citas:
Ver el resumen de las citas asignadas para preparar la atención médica.
Restricciones:
No puede modificar citas.
No puede actualizar el historial médico de las mascotas.
No tiene acceso a la información de contacto de los clientes ni a la gestión de promociones o servicios.

Permisos en Común entre Roles Internos de la Veterinaria
Permisos Comunes:
Ver Agenda de Citas: Todos los roles tienen acceso para visualizar la agenda de citas del día, filtrada según sus responsabilidades. Por ejemplo, el recepcionista puede ver todas las citas, mientras que el doctor solo ve las suyas.
Acceso al Catálogo de Servicios: Todos los roles pueden ver los servicios que ofrece la veterinaria, aunque solo el Administrador y el Gerente pueden modificarlos.
Gestión de Clientes: Todos los roles pueden ver la información básica de los clientes, pero la modificación de estos datos es exclusiva del Administrador y Gerente.

Restricciones y Seguridad
Autenticación y Permisos Personalizados: Todos los usuarios internos de la veterinaria deben estar autenticados y sus permisos serán asignados por el Administrador de Veterinaria o el Gerente. Solo estos roles tienen acceso a modificar permisos y roles.
Control de Acceso: Cada rol solo tiene acceso a la información y funciones necesarias para su trabajo. Los datos sensibles como historial médico de mascotas o información de contacto de clientes están restringidos según el rol.
Auditoría y Registro de Actividades: Todas las acciones realizadas por los usuarios internos de la veterinaria serán registradas (quién confirma una cita, quién modifica un historial médico, etc.), para garantizar la transparencia y responsabilidad en cada interacción.
Rol Usuario con Mascota
Este rol está enfocado en los usuarios que tienen mascotas y utilizan la plataforma para acceder a servicios veterinarios, agendar citas, participar en eventos y gestionar la salud de sus mascotas.
Permisos Exclusivos del Usuario con Mascota:
Gestión de Perfil y Mascotas:
Crear y modificar su perfil personal.
Registrar y modificar el perfil de sus mascotas (nombre, raza, especie, historial médico, etc.).
Visualización de Veterinarias y Servicios:
Navegar y buscar veterinarias cercanas.
Filtrar veterinarias por especialidades y especies atendidas.
Consultar servicios y promociones activas.
Gestión de Citas:
Agendar citas con veterinarias y doctores disponibles.
Cancelar o modificar citas.
Recibir confirmación de citas agendadas.
Creación de Cotizaciones:
Seleccionar productos y servicios de una veterinaria para generar una cotización.
Consultar precios y términos de los servicios ofrecidos.
Participación en Eventos Comunitarios:
Crear eventos personales, como "Find My Pet" (búsqueda de mascotas perdidas).
Participar en eventos comunitarios (carreras, adopciones, donaciones).
Inscribirse y cancelar su inscripción en eventos.
Realizar donaciones monetarias en eventos organizados por veterinarias o usuarios.
Valoraciones y Reseñas:
Dejar reseñas y valoraciones de veterinarias, servicios y doctores.
Consultar las valoraciones de otras personas para decidir sobre servicios.

Permisos en Común entre Administradores y Usuarios con Mascotas
Estos son los permisos que ambos roles tienen en común, permitiendo ciertas acciones colaborativas o de visualización.
Permisos Comunes:
Participación en Eventos Comunitarios:
Ambos roles pueden ver y participar en eventos comunitarios. El administrador puede organizarlos y gestionarlos, mientras que el usuario con mascota puede inscribirse y participar.
Notificaciones de Eventos:
Ambos roles pueden recibir notificaciones sobre eventos comunitarios y la creación de eventos relacionados con mascotas.
Gestión de Citas:
El administrador puede gestionar las citas creadas por los usuarios, y los usuarios pueden ver el estado de sus citas (confirmadas, canceladas, completadas).
Ver Veterinarias y Servicios:
Ambos roles pueden consultar la lista de veterinarias disponibles, con la diferencia de que los administradores solo ven sus propias veterinarias y sucursales, mientras que los usuarios pueden buscar y navegar por varias opciones.

Restricciones Generales para Ambos Roles:
Autenticación Obligatoria: Todos los usuarios, ya sean administradores o usuarios con mascotas, deben estar autenticados mediante su correo electrónico o una red social (por ejemplo, Google) para acceder a las funciones de la plataforma.
Restricción por Valoraciones: Los usuarios con una baja calificación (tanto administradores como usuarios con mascota) pueden ver limitadas sus capacidades de interacción (ej. bloquear la capacidad de organizar eventos o acceder a ciertos servicios).
Confidencialidad de Datos: Solo los administradores tienen acceso a los datos de sus clientes y mascotas. Los usuarios no podrán ver los perfiles de otros usuarios con mascotas, salvo en eventos comunitarios donde se permita la interacción.

Entidades Principales
1. Usuarios
Esta entidad representa a los usuarios de la plataforma, ya sean administradores, doctores, recepcionistas, o usuarios con mascotas.
id (int): Identificador único del usuario.
nombre (string): Nombre completo del usuario.
email (string): Correo electrónico del usuario.
contraseña (string): Contraseña encriptada.
telefono (string): Número de teléfono del usuario.
tipo_usuario (enum): Tipo de usuario (cliente, veterinario, administrador, doctor, recepcionista, etc.).
ubicación (int, opcional): Ubicación o sucursal a la que está asignado (si aplica).
roles (relación): Relación con la tabla de roles para asignar permisos específicos según el rol.

2. Veterinarias (Compañías)
Representa una veterinaria o doctor independiente registrado en la plataforma.
id (int): Identificador único de la veterinaria.
nombre (string): Nombre de la veterinaria.
descripción (text, opcional): Descripción de la veterinaria.
telefono (string): Número de contacto.
email (string): Correo electrónico de contacto.
sitio_web (string, opcional): URL del sitio web.
eslogan (string, opcional): Eslogan de la veterinaria.
estatus (boolean): Si la veterinaria está activa o inactiva.
fecha_registro (datetime): Fecha de registro de la veterinaria.

3. Sucursales
Cada veterinaria puede tener múltiples sucursales.
id (int): Identificador único de la sucursal.
company_id (int): Relación con la veterinaria a la que pertenece.
nombre (string): Nombre de la sucursal.
dirección (string): Dirección de la sucursal.
coordenadas (geolocalización): Latitud y longitud de la ubicación.
telefono (string): Número de contacto de la sucursal.
horarios (json): Horarios de atención de la sucursal.
servicio_24_horas (boolean): Si la sucursal ofrece servicios 24 horas.

4. Doctores
Representa a los doctores veterinarios que trabajan en las veterinarias.
id (int): Identificador único del doctor.
nombre (string): Nombre completo del doctor.
usuario_id (int): Relación con la tabla de usuarios.
estatus (int): Estado del doctor (activo/inactivo).
sucursal_id (int): Relación con la sucursal donde trabaja.
Disponibilidad de los Doctores:
Define los días y horas en que los doctores están disponibles.
id (int): Identificador único de la disponibilidad.
dia_semana (string): Día de la semana en el que está disponible.
hora_desde (time): Hora de inicio de disponibilidad.
hora_hasta (time): Hora de finalización de disponibilidad.
Especialidades del Doctor:
Relación entre doctores y especialidades.
doctor_id (int): Identificador del doctor.
specialty_id (int): Relación con la especialidad correspondiente.

5. Especialidades
Especialidades médicas que ofrecen los doctores y las veterinarias.
id (int): Identificador único de la especialidad.
nombre (string): Nombre de la especialidad (ej. Dermatología, Cirugía).
descripción (text, opcional): Descripción de la especialidad.

6. Citas
Permite gestionar las citas que los usuarios agendan con los veterinarios.
id (int): Identificador único de la cita.
descripcion (text, opcional): Motivo o detalles de la cita.
fecha_desde (datetime): Fecha y hora de inicio de la cita.
fecha_hasta (datetime): Fecha y hora de finalización de la cita.
branch_id (int): Relación con la sucursal donde se agendó la cita.
doctor_id (int): Relación con el doctor asignado.
usuario_id (int): Relación con el usuario que agendó la cita.
mascota_id (int): Relación con la mascota que será atendida.
specialty_id (int, opcional): Relación con la especialidad requerida para la cita.
estatus (enum): Estado de la cita (pendiente, confirmada, cancelada, completada).

7. Mascotas
Representa a las mascotas que los usuarios han registrado en la aplicación.
id (int): Identificador único de la mascota.
nombre (string): Nombre de la mascota.
usuario_id (int): Relación con el dueño de la mascota.
general_info (text, opcional): Información adicional sobre la mascota.
especie_id (int): Relación con la especie de la mascota.
sub_especie_id (int, opcional): Relación con la subespecie o raza de la mascota.
peso (decimal): Peso de la mascota.
fecha_nacimiento (date, opcional): Fecha de nacimiento de la mascota.
sexo (enum): Sexo de la mascota (macho, hembra).
esterilizado (boolean): Si la mascota está esterilizada.
vacunas (text, opcional): Detalle de las vacunas que tiene la mascota.
foto (string, opcional): URL de la imagen de la mascota.
Fotos de Mascotas:
Permite agregar fotos adicionales de las mascotas.
id (int): Identificador único de la imagen.
mascota_id (int): Relación con la mascota.
image_path (string): URL de la imagen.

8. Especies y Subespecies
Catalogo de especies y subespecies para clasificar a las mascotas.
Especies:
id (int): Identificador único de la especie.
nombre (string): Nombre de la especie (e.g., perro, gato, ave).
public_name (string): Nombre público de la especie (opcional).
Subespecies:
id (int): Identificador único de la subespecie.
especie_id (int): Relación con la especie.
nombre (string): Nombre de la subespecie o raza.

9. Servicios Veterinarios
Los servicios ofrecidos por las veterinarias y sus sucursales.
id (int): Identificador único del servicio.
nombre (string): Nombre del servicio (ej. Consulta general, vacunación).
descripcion (text, opcional): Descripción del servicio.
costo (decimal): Costo del servicio.
sucursal_id (int): Relación con la sucursal que ofrece el servicio.
activo (boolean): Indica si el servicio está activo.
Branch Services (Servicios por Sucursal)
branch_id (int): Relación con la sucursal (branches).
service_id (int, opcional): Relación con el servicio (services).
name (varchar): Nombre del servicio personalizado.
is_active (int): Indica si el servicio está activo.
cost (decimal): Costo del servicio.

10. Productos (Products)
Los productos serán ofertados por las veterinarias y estarán disponibles para ser incluidos en una cotización.
id (int): Identificador único del producto.
branch_id (int): Relación con la sucursal que ofrece el producto.
nombre (varchar): Nombre del producto.
descripcion (varchar, opcional): Descripción detallada del producto.
precio (decimal): Precio del producto.
imagen_url (varchar, opcional): URL de la imagen del producto.
activo (boolean): Estado del producto (1: Activo, 0: Inactivo).
stock (int): Disponibilidad del producto
11. Servicios (Services)
Los servicios ofrecidos por las veterinarias también podrán incluirse en las cotizaciones.
id (int): Identificador único del servicio.
branch_id (int): Relación con la sucursal que ofrece el servicio.
nombre (varchar): Nombre del servicio.
descripcion (varchar, opcional): Descripción del servicio.
precio (decimal): Precio del servicio.
activo (boolean): Estado del servicio (1: Activo, 0: Inactivo).
13. Cotización (Quotation)
Esta entidad manejará la creación de una cotización que incluya productos y servicios seleccionados por el usuario. Aquí no se procesará el pago, solo se generará un resumen de lo que el usuario desea adquirir.
id (int): Identificador único de la cotización.
usuario_id (int): Relación con el usuario que solicita la cotización.
branch_id (int): Relación con la sucursal a la que se le pide la cotización.
fecha_creacion (datetime): Fecha de creación de la cotización.
subtotal (decimal): Suma del costo de productos y servicios.
impuestos (decimal, opcional): Cálculo de impuestos (si aplica).
total (decimal): Total a pagar (subtotal + impuestos).
estatus (enum): Estado de la cotización (Pendiente, Aceptada, Cancelada).
comentarios (text, opcional): Comentarios adicionales del cliente.
14. Detalle de Cotización (Quotation Details)
Esta subentidad contiene los detalles de los productos y servicios seleccionados en la cotización.
id (int): Identificador único del detalle.
quotation_id (int): Relación con la cotización.
producto_id (int, opcional): Relación con el producto cotizado.
servicio_id (int, opcional): Relación con el servicio cotizado.
cantidad (int): Cantidad solicitada.
precio_unitario (decimal): Precio unitario del producto o servicio.
subtotal (decimal): Precio total por este producto o servicio (cantidad x precio_unitario).
metodo_pago (varchar): Almacena el método de pago que el usuario seleccionará (e.g., tarjeta, PayPal).
estado_pago (enum): Indica el estado de la transacción si se integra un sistema de pago.
referencia_pago (varchar): Almacena la referencia de la transacción generada por la pasarela de pago, si en el futuro se realiza una integración.
fecha_pago (datetime): Fecha y hora en la que se completó la transacción.
total_a_pagar (decimal): Total calculado para la cotización (incluyendo impuestos, si aplica).
15. Historial de Cotización (Quotation History)
Esta entidad registra el historial de interacciones con la cotización, como modificaciones, actualizaciones o cambios de estatus.
id (int): Identificador único del registro.
quotation_id (int): Relación con la cotización.
usuario_id (int, opcional): Usuario que realizó la modificación.
fecha_modificacion (datetime): Fecha y hora de la modificación.
cambio (varchar): Descripción del cambio realizado (e.g., cambio de estado, modificación de productos).


Preparación para Pasarela de Pago (Futuro)
En caso de que se desee implementar en el futuro una pasarela de pago, ya se tendrán los siguientes campos listos en la entidad Cotización (Quotation):
metodo_pago (enum, opcional): Método de pago seleccionado (e.g., Tarjeta, PayPal).
estado_pago (enum, opcional): Estado del pago (e.g., Pendiente, Completado, Fallido).
referencia_pago (varchar, opcional): Identificador de la transacción bancaria para rastrear el pago.
Esto permitirá que, cuando se desee implementar el procesamiento de pagos, la infraestructura ya esté preparada y solo sea necesario integrar una pasarela de pago como Stripe, PayPal, etc.

Flujo de Cotización (Sin Pasarela de Pago)
Creación de Cotización: El usuario selecciona los productos y servicios que desea incluir en la cotización.
Revisión de Cotización: Se genera un resumen con los productos y servicios seleccionados, mostrando el subtotal, impuestos (si aplica) y el total.
Aceptación Interna: La cotización es gestionada por el sistema de la veterinaria, quien puede actualizar el estatus de la misma (e.g., aceptada, cancelada).
Transacción Offline: El usuario recibe la cotización, y el pago se gestiona por fuera de la plataforma (offline, transferencia bancaria, efectivo).

16. Promociones
Promociones y descuentos ofrecidos por las veterinarias.
id (int): Identificador único de la promoción.
titulo (string): Título de la promoción.
descripcion (text): Detalles de la promoción.
descuento (decimal): Porcentaje o monto de descuento.
fecha_inicio (datetime): Fecha de inicio de la promoción.
fecha_fin (datetime): Fecha de finalización de la promoción.
sucursal_id (int): Relación con la sucursal que ofrece la promoción.
product_id (int): Relacion con el producto o servicio para dirigirlo a dicha seccion dentro del perfil de la veterinaria

17. Notificaciones Internas (Internal Notifications)
id (int): Identificador único de la notificación.
usuario_origen_id (int): Relación con el usuario que genera la notificación (por ejemplo, un gerente).
usuario_destino_id (int): Relación con el usuario que recibe la notificación (por ejemplo, un doctor).
mensaje (text): Contenido del mensaje de la notificación (por ejemplo, "Tu horario ha sido actualizado").
tipo_notificacion (enum): Tipo de notificación (cambio de horario, cita, comunicación general).
Ejemplos: "Cambio de Cita", "Cambio de Horario", "Nuevo Mensaje".
fecha_envio (datetime): Fecha y hora en que se envía la notificación.
leido (boolean): Indica si el destinatario ha leído la notificación.
Relación con los roles internos:
Gerentes pueden enviar notificaciones a doctores o recepcionistas cuando hay cambios en las citas, disponibilidad o cualquier asunto administrativo.
Doctores pueden recibir notificaciones automáticas cuando sus citas cambian o se cancelan.
Este sistema permitiría una mejor comunicación interna sin necesidad de depender de otras plataformas.


18. Combos (Bundles)
id (int): Identificador único del combo.
nombre (varchar): Nombre del combo.
descripcion (text, opcional): Descripción del combo.
precio (decimal): Precio especial del combo.
sucursal_id (int): Relación con la sucursal que ofrece el combo.
activo (boolean): Indica si el combo está disponible.
Detalle de Combo (Bundle Details)
Esta subentidad define los productos y servicios que están incluidos en el combo.
combo_id (int): Relación con el combo.
producto_id (int, opcional): Relación con la entidad de productos, si el combo incluye un producto.
servicio_id (int, opcional): Relación con la entidad de servicios, si el combo incluye un servicio.
cantidad (int): Cantidad de ese producto o servicio incluido en el combo.
De esta forma, las veterinarias pueden crear combos que agrupen productos y servicios y ofrecerlos a un precio especial, por ejemplo: un paquete de vacunación que incluya consulta y un set de vacunas.
19. Evento Comunitario (Community Event)
Esta entidad será la base para cualquier evento comunitario creado por usuarios o veterinarias.
id (int): Identificador único del evento.
organizador_id (int): Relación con el usuario o veterinaria que organiza el evento.
nombre (string): Nombre del evento.
descripcion (text): Descripción detallada del evento.
fecha_inicio (datetime): Fecha y hora de inicio del evento.
fecha_fin (datetime, opcional): Fecha y hora de finalización del evento.
ubicacion (string, opcional): Dirección o lugar del evento.
coordenadas (geolocalización, opcional): Coordenadas geográficas del evento (para eventos físicos).
tipo_evento (enum): Especifica el tipo de evento (e.g., reunión, carrera, adopción, donación).
cupo_maximo (int, opcional): Límite máximo de participantes permitidos (si aplica).
meta_donacion (decimal, opcional): Meta de donación en eventos de recaudación de fondos (si aplica).
meta_adopciones (int, opcional): Meta de adopciones en eventos de adopción (si aplica).
estatus (enum): Estado del evento (activo, finalizado, cancelado).

Subentidad: Participantes del Evento (Event Participants)
Maneja a los usuarios que se inscriben en un evento comunitario.
id (int): Identificador único del registro de participación.
evento_id (int): Relación con la tabla Evento Comunitario.
usuario_id (int): Relación con el usuario que se inscribe en el evento.
fecha_inscripcion (datetime): Fecha y hora en que el usuario se inscribe en el evento.

Subentidad: Donaciones del Evento (Event Donations)
Para eventos de recaudación, esta subentidad registra las donaciones realizadas por los usuarios.
id (int): Identificador único de la donación.
evento_id (int): Relación con la tabla Evento Comunitario.
usuario_id (int, opcional): Relación con el usuario que realizó la donación (puede ser anónimo).
monto (decimal): Monto de la donación.
fecha_donacion (datetime): Fecha y hora en que se realizó la donación.

Subentidad: Notificaciones de Eventos Comunitarios
Maneja las notificaciones enviadas a los usuarios cuando ocurre un cambio relevante en el evento (e.g., cambio de fecha, nuevo mensaje, etc.).
id (int): Identificador único de la notificación.
evento_id (int): Relación con la tabla Evento Comunitario.
usuario_id (int): Relación con el usuario que recibe la notificación.
mensaje (text): Contenido de la notificación.
fecha_envio (datetime): Fecha y hora en que se envía la notificación.

Relaciones Clave:
Usuarios y Eventos: Los usuarios pueden crear o participar en eventos comunitarios organizados por otros usuarios o veterinarias.
Veterinarias y Eventos: Las veterinarias también pueden crear y gestionar eventos comunitarios.
Participantes y Eventos: Los usuarios pueden inscribirse en eventos y sus datos se registrarán en la entidad de Participantes del Evento.
Donaciones y Eventos: Los usuarios pueden realizar donaciones para eventos que las requieran, y estas se registran en la entidad de Donaciones del Evento.
Notificaciones y Eventos: Los usuarios recibirán notificaciones relacionadas con los eventos en los que participen o estén inscritos.

