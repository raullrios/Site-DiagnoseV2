import os
from PIL import Image

def optimize_images():
    img_dir = 'static/img'
    for filename in os.listdir(img_dir):
        if filename.endswith('.webp') and not filename.endswith('-sm.webp'):
            filepath = os.path.join(img_dir, filename)
            try:
                with Image.open(filepath) as img:
                    width, height = img.size
                    if width > 800:
                        # Create a smaller version for mobile (400px wide)
                        ratio = 400.0 / width
                        new_height = int(height * ratio)
                        sm_img = img.resize((400, new_height), Image.Resampling.LANCZOS)
                        
                        sm_filename = filename.replace('.webp', '-sm.webp')
                        sm_filepath = os.path.join(img_dir, sm_filename)
                        sm_img.save(sm_filepath, 'WEBP', quality=80)
                        print(f"Created {sm_filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == '__main__':
    optimize_images()

