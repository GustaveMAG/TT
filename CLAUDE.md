@AGENTS.md

## Machine locale (Windows)

- `python3` pointe vers Python 3.14, sans Whisper. Pour tous les scripts de la méthode, remplacer `python3` par
  `py -3.12` (Python 3.12 avec openai-whisper, torch CPU et playwright), par exemple
  `py -3.12 .claude/skills/motion-design/scripts/mots.py <project>/assets/audio/voix-montage.wav`.
- La commande `whisper` (Python 3.12) et ffmpeg/ffprobe (winget, Gyan.FFmpeg) sont dans le PATH utilisateur.
