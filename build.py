import os

image_folder = 'image'
files = os.listdir(image_folder)
files.sort()

html_content = '''
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Wayen Mansion Private Gallery</title>
    <link rel='stylesheet' href='style.css'>
</head>
<body>
    <h1 class='main-title'>THE GOTHAM ARCHIVE</h1>

    <div class='search-container'>
        <input type='text' id='searchInput' placeholder='输入电影名或排名进行搜索......'>
    </div>

    <div class='gallery'>
'''

for f in files:
    if f.endswith(('.jpg', ',png' ,'.jpeg' ,'webp')):
        html_content += f'        <div class="poster"><img src="image/{f}"></div>\n'

html_content += f'''
    </div>
    <script src='script.js'></script>
</body>
</html>
'''

with open ('index.html','w',encoding='UTF-8') as A:
    A.write(html_content)