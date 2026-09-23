import re

with open('templates/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# For Vendas
content = content.replace(
    '''          <div
            class="carousel-slide absolute inset-0 transition-opacity duration-700 opacity-100"
          >
            <!-- WEBP IMPLEMENTADO AQUI -->''',
    '''          <div
            class="carousel-slide absolute inset-0 transition-opacity duration-700 opacity-100"
          >
            <a href="/vendas" class="absolute inset-0 z-20" aria-label="Acessar página de Vendas"></a>
            <!-- WEBP IMPLEMENTADO AQUI -->'''
)

# For Locacoes
content = content.replace(
    '''          <div
            class="carousel-slide absolute inset-0 transition-opacity duration-700 opacity-0"
          >
            <div
              class="absolute inset-0 bg-cover bg-top"''',
    '''          <div
            class="carousel-slide absolute inset-0 transition-opacity duration-700 opacity-0"
          >
            <a href="/locacoes" class="absolute inset-0 z-20" aria-label="Acessar página de Locações"></a>
            <div
              class="absolute inset-0 bg-cover bg-top"'''
)

with open('templates/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

