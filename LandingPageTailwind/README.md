# Landing Page - Solution

<img src="./screen/desktop.jpg" alt="Solucion preview" style="max-width: 100%; height: auto;">

Esta es una solución del proyecto **Landing Page** como parte de auto reto de codificación #SisePuede Miguel Ramos Alarcón. La mejor manera de escribir un buen código es programando todos los días🔥.

<div align="center">
  <img src="https://img.shields.io/badge/Level-Junior-green" alt="Level - Junior">
  <img src="https://img.shields.io/badge/FrontEnd-HTML%2BCSS-yellow" alt="FrontEnd - HTML+CSS">
  <img src="https://img.shields.io/badge/BackEnd-Javascript-orange" alt="BackEnd - Javascript">
  <img alt="Static Badge" src="https://img.shields.io/badge/Framework-CSS?logo=tailwindcss&logoColor=%2306B6D4&label=Tailwind">

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
Front End Mentor es un portal web que diariamente publica retos para desarrollar nuestras habilidades en Diseño Web. 


## Related
Plantilla
[Link de la plantilla](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5)

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

![](./screen/desktop.jpg)
</details>

<details>
    <summary>📱 Mobile version</summary>

![](./screen/mobile.jpg)
</details>

<details>
    <summary>💪 Solución </summary>

![](./screen/solucion.png)
</details>


### Enlaces

### El proyecto se encuentra alojado en mi repositorio de GitHub:

- [Pagina web](https://miguelramosalarcon.github.io/personal_challenges/LANDINGPAGETAILWIND/)
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

Usamos `Tailwind` para adaptar realizar todo el diseño, utilizando sus component para la personalización:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "principal":['"Be Vietnam Pro"', 'sans-serif']
      },
      colors: {
        // Primary
        "bright-red":"hsl(12, 88%, 59%)",
        "dark-blue":"hsl(228, 39%, 23%)",
        // Neutral
        "dark-grayish-blue":"hsl(227, 12%, 61%)",
        "very-dark-blue":"hsl(233, 12%, 13%)",
        "very-pale-red":"hsl(13, 100%, 96%)",
        "very-light-gray":"hsl(0, 0%, 98%)"
      },
      backgroundImage:{
        "close-menu":"url('../images/icon-close.svg')",
        "open-menu":"url('../images/icon-hamburger.svg')",
      }
    },
  },
  plugins: [],
}
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{
    .wrapper{
        @apply w-[90%] mx-auto overflow-hidden max-w-screen-xl;
    }

    .button{
        @apply bg-bright-red text-very-light-gray block w-max py-4 px-12 rounded-full hover:opacity-70 transition-all;
    }

    .footer-area{
        grid-template-areas: 
        "form"
        "nav"
        "social"
        "logo"
        "copy"
        ;
    }

    .footer-area-md{
        grid-template-areas:
        "logo nav form"
        "social nav copy";
    }

}
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

## Autor del reto

Miguel Ramos Alarcón, Full Stack Developer and Creative Designer.

- [Facebook](https://www.facebook.com/)
- [Instagram](https://www.instagram.com/)
- [LinkedIn](https://www.linkedin.com/in/)
- [Web]()


2024, mí año.🔥

> [!IMPORTANT]
> **“En medio de la dificultad reside la oportunidad."** No dejemos de practicar, esforcémonos por lo que nos apasiona.
