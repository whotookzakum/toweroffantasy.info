# WebP Batch File converter
By [biellSilva](https://github.com/biellSilva). Uses the python library [Pillow](https://github.com/python-pillow/Pillow), and executes on multiple threads for performance.

## Usage
1. python -m venv .venv
2. .venv/Scripts/activate.bat
3. pip install -r requirements.txt
4. Change the path to your images (main.py line 13: `def loader(path: str = RELATIVE_PATH_HERE):`)
5. python main.py