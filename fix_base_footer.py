import os

with open('templates/base.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'class="bg-[#132104] text-gray-300 border-t border-[#253d0b] pt-12 pb-8"',
    'class="{% block footer_classes %}bg-[#132104] text-gray-300 border-t border-[#253d0b] pt-12 pb-8{% endblock %}"'
)

content = content.replace(
    'class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left mb-10 border-b border-[#253d0b] pb-8"',
    'class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left mb-10 border-b {% block footer_border_class %}border-[#253d0b]{% endblock %} pb-8"'
)

# Replace the icon wrapper classes (there are three of them)
content = content.replace(
    'class="w-10 h-10 mx-auto sm:mx-0 bg-[#436b0b] rounded-full flex items-center justify-center text-white"',
    'class="w-10 h-10 mx-auto sm:mx-0 {% block footer_icon_class %}bg-[#436b0b] text-white{% endblock %} rounded-full flex items-center justify-center"'
)

with open('templates/base.html', 'w', encoding='utf-8') as f:
    f.write(content)

