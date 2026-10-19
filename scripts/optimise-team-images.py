from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
output = root / 'public/images/teams'
output.mkdir(exist_ok=True)
sources = {
    'pharmacy': 'gallery/World_Sight_Day_Pharmacy_Staff.jpg',
    'doctors': 'gallery/Medical_Staff_Team_Photo_1.jpg',
    'nursing': 'gallery/Medical_Staff_Late_Night_Shift.jpg',
    'laboratory': 'gallery/GMC_Laboratory_Workspace.jpg',
    'finance': 'Goodwill-Medical-centre-front-view.jpeg',
    'security': 'gallery/Gate_Entrance_Gathering.jpg',
    'janitors': 'gallery/Clinic_Hallway_Waiting_Area.jpg',
    'maternity': 'report/report-03.jpeg',
    'eye-care': 'report/report-11.jpeg',
    'emergency': 'report/report-53.jpeg',
    'paediatrics': 'gallery/Newborn_Baby_Care.jpg',
    'surgery': 'report/report-09.jpeg',
    'outreach': 'gallery/Health_Outreach_Tent_Event.jpg',
    'reception': 'gallery/Patient_Waiting_Area_Talk.jpg',
}
for name, relative in sources.items():
    with Image.open(root / 'public/images' / relative) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        image.thumbnail((1000, 1200))
        image.save(output / f'{name}.webp', 'WEBP', quality=83, method=6)
    print(f'{name}: ready')
