from PIL import Image

from concurrent.futures import ThreadPoolExecutor
from pathlib import Path


def convert(file: Path):
    img = Image.open(file)
    img.save(str(file).replace('.png', '.webp'), format='webp', optimize=True, quality=100)
    file.unlink()


def loader(path: str = '../static/Hotta/Content'):
    with ThreadPoolExecutor() as thread:
        for file in Path(path).iterdir():
            if file.is_dir():
                loader(str(file))
            
            if file.is_file() and file.name.endswith('.png'):
                thread.submit(convert, file)
                print(str(file))


if __name__ == '__main__':
    loader()