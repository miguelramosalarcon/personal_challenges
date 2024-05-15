# Business Blog Card  - Solution

<img src="./screen/desktop.png" alt="Solucion preview" style="max-width: 100%; height: auto;">

Esta es una solución del proyecto **Business Blog Card** como parte de auto reto de codificación #SisePuede Miguel Ramos Alarcón. La mejor manera de escribir un buen código es programando todos los días🔥.

<div align="center">
  <img src="https://img.shields.io/badge/FrontEnd-HTML%2BCSS-yellow" alt="FrontEnd - HTML+CSS">
</div>

## Tabla de contenidos

- [Visión general](#visión-general)
  - [El desafío](#el-desafío)
  - [Capturas de pantalla](#capturas-de-pantalla)
  - [Enlaces](#enlaces)
- [Proceso de trabajo](#proceso-de-trabajo)
  - [Desarrollo](#desarrollo)
  - [Lo que aprendimos](#lo-que-aprendimos)
  - [Lo que aprenderemos](#lo-que-aprenderemos)
  - [Recursos](#recursos)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)

## Visión general
Dev Challenges es un portal web que diariamente publica diseños y/o componentes web realizados en diversas plataformas como Figma, Sketch, Adobe XD, etc. 


## Related
Dev Challenges muestra retos diarios de diferentes niveles, debes estar logeado para poder observar los retos y subir las soluciones.
[Dev Challenges Minimal Blog card](https://devchallenges.io/editor/solution/22161)

### El desafío
He tomado diariamente un diseño al azar realizado en Figma, Sketch, etc, y convertirlo en HTML, CSS y añadirle funcionalidades con Javascript.

Esto con el motivo de práctica, disciplina y constancia de mi persona.

Los visitantes a mi GitHub podran ver:

- Ver el diseño óptimo según el tamaño de pantalla de su dispositivo, cabe señalar que los componentes diseñador en la web UI Design solo corresponden a diseños de desktop, por lo que se considera codificar en modo responsivo a criterio propio.
- Ver estados `hover` para los elementos interactivos en la página.
- Asi como el archivo o link Figma o Sketch original / link de la web.

### Capturas de pantalla

Diseño adaptado para cualquier tipo de pantalla del dispositivo:

<details>
    <summary>🖥️ Desktop version</summary>

![](./screen/desktop.png)
</details>

<details>
    <summary>📱 Mobile version</summary>

![](./screen/tablet.png)
</details>

<details>
    <summary>💪 Solución </summary>

![](./screen/solucion.png)
</details>


### Enlaces

### El proyecto se encuentra alojado en mi repositorio de GitHub:

- [Pagina web](https://miguelramosalarcon.github.io/personal_challenges/BusinessBlogCard/)
- [Codigo fuente]()

## Proceso de trabajo
Primero realice la maquetación de acuerdo a lo que se puede observar en la imagen de referencia, posteriormente se dio estilos CSS, finalmente se dio interacción con Javascript.

### Desarrollo

- Marcado HTML
- Propiedades CSS
- Propiedad `grid o flex`
- Media query `solo si es necesario`

### Lo que aprendimos

Nuevamente procuramos usar la [metodologia BEM](https://getbem.com/introduction/) para ser más administrable el marcado HTML.

```html
<main class="container">
  <article class="card">
    <div class="card__header">
      <div class="card--img"></div>
    </div>
    <div class="card__body"></div>
    <div class="card__footer"></div>
  </article>
</main>
```

Usamos `media query` para adaptar el diseño a pantallas pequeñas:

```css
/* ----- Media queries ----- */
No fue necesario usarla
```

Usamos `Javascript` para visualizar el password:

```js
/* ----- JS ----- */
No fue necesario usar JS
```


### Lo que aprenderemos

Aprenderemos más sobre el concepto _mobile-first_ para usar correctamente las propiedades CSS.

### Recursos

Hemos recopilado una lista de recursos e información valiosa que puede ayudarte a comprender mejor la realización de este hermoso proyecto:

- [UI Design Daily](https://www.uidesigndaily.com/) - contiene diseños UI de excelente calidad para codificar.
- [Google Fonts](https://fonts.google.com/) - contiene fuentes que podemos descargar y usar para nuestros proyectos.
- [BEM Methodology In CSS: A Quick Start Guide](https://scalablecss.com/bem-quickstart-guide/) - una guía corta pero precisa para comprender la metología BEM. Puedes descargar la guía en PDF.
- [Responsively App](https://responsively.app/) - es una app que nos muestra como va quedando nuestro diseño en distintos dispositivos ya sean desktops,tablets, celulares, etc.
- [CodePen](https://codepen.io/sosuke/pen/Pjoqqp) - Modificar el color de un SVG
- [Boxy-SVG](https://boxy-svg.com/) - Modificar o crear un SVG
- [Alertify-JS](https://alertifyjs.com/) - Alertas en JS
- [ChartJS](https://www.chartjs.org/) - Librería Graficos
- [Modern-fluid-typography](https://modern-fluid-typography.vercel.app/) - Hacer de manera fluida y responsiva los textos.

## Autor del reto

Miguel Ramos Alarcón, Full Stack Developer and Creative Designer.

- [Facebook](https://www.facebook.com/)
- [Instagram](https://www.instagram.com/)
- [LinkedIn](https://www.linkedin.com/in/)
- [Web]()


2024, mí año.🔥

> [!IMPORTANT]
> **“En medio de la dificultad reside la oportunidad."** No dejemos de practicar, esforcémonos por lo que nos apasiona.
