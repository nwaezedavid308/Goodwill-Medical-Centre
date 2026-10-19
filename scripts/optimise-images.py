"""Create responsive WebP copies of the homepage's real hospital photography."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
output = root / 'public/images/optimised'
output.mkdir(exist_ok=True)
images = {
    'facility': 'Goodwill-Medical-centre-front-view.jpeg',
    'maternal': 'report/report-03.jpeg',
    'inside': 'report/report-23.png',
    'care': 'gallery/Clinic_Hallway_Waiting_Area.jpg',
    'bridge': 'report/report-31.jpeg',
}
for name, relative in images.items():
    path = root / 'public/images' / relative
    with Image.open(path) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        for width in (640, 1280):
            sized = image.copy()
            sized.thumbnail((width, 1600))
            target = output / f'{name}-{width}.webp'
            sized.save(target, 'WEBP', quality=82, method=6)
        print(f'{name}: {path.stat().st_size:,} bytes -> { (output / (name + "-1280.webp")).stat().st_size:,} bytes')
