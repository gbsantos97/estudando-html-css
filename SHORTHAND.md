/*Exemplos de SHORTHAND simplificando codigos para ficarem mais legiveis*/
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;
}
VENDOR PREFIXES
São coisas que permitem que browsers adiocionem features a fim de colocar em uso alguma novidade que vemos no CSS.

Exemplos:

p {
	-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */
Você também pode consultar se a feature pode ser utilizada através dos sites:

https://ireade.github.io/which-vendor-prefix

https://caniuse.com

Tipos numéricos
<integer> - número inteiro como -10 ou 223
<number> - número decimal como -2.4, 64 ou 0.234
<dimension> - é um <number> com uma unidade junto: 90deg, 2s, 8px
<percentage> - representa uma fração de outro número: 50%
Unidades comuns
<length> - é um dos mais usados no CSS e representa um valor de distância: px, em, vw
<angle> - representa um ângulo: deg, rad, turn
<time> - representa um tempo: s, ms
<resolution> - representa resoluções para dispositivos: dpi