import re

with open('templates/base.html', 'r', encoding='utf-8') as f:
    content = f.read()

count = 1
def repl(match):
    global count
    res = f'{{% block footer_icon_class_{count} %}}bg-[#436b0b] text-white{{% endblock %}}'
    count += 1
    return res

content = re.sub(r'\{% block footer_icon_class %\}bg-\[#436b0b\] text-white\{% endblock %\}', repl, content)

with open('templates/base.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('templates/vendas.html', 'r', encoding='utf-8') as f:
    vendas = f.read()

vendas = vendas.replace(
    '{% block footer_icon_class %}bg-[#003865] text-gray-400{% endblock %}',
    '{% block footer_icon_class_1 %}bg-[#003865] text-gray-400{% endblock %}\n{% block footer_icon_class_2 %}bg-[#003865] text-gray-400{% endblock %}\n{% block footer_icon_class_3 %}bg-[#003865] text-gray-400{% endblock %}'
)

with open('templates/vendas.html', 'w', encoding='utf-8') as f:
    f.write(vendas)

