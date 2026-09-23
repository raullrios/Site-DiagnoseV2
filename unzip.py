import zipfile
with zipfile.ZipFile("website diagnose backup.zip", 'r') as zip_ref:
    zip_ref.extractall("backup_temp")

