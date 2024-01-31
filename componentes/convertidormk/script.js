// Función para generar Markdown a partir del texto ingresado
function generarMarkdown() {
    // Obtener el texto ingresado
    let textoEntrada = document.getElementById("inputText").value;
  
    // Convertir el texto a Markdown
    let markdownGenerado = convertirAMarkdown(textoEntrada);
  
    // Mostrar el Markdown generado en el segundo textarea
    document.getElementById("outputMarkdown").value = markdownGenerado;
  }
  
  // Función para convertir texto a Markdown (implementación simple)
  function convertirAMarkdown(texto) {
    // Reemplazar cada línea con un prefijo de viñeta
    let lineas = texto.split('\n');
    let markdown = lineas.map(linea => `- ${linea}`).join('\n');
  
    return markdown;
  }
  