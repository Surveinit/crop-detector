# AI based crop detector

## Installation guide

## **1. Install Git**

Git is required to clone the project repository.

1. **Download Git**:
    - Go to the official Git website or use a trusted source like `git-scm.com` to download the installer.
    - Choose the appropriate version for your system (64-bit or 32-bit)[^2][^5][^8].
2. **Install Git**:
    - Run the downloaded installer.
    - Follow the setup wizard, and accept the default settings unless you have specific preferences.
    - During installation, select a default text editor (e.g., Notepad++ or VS Code).
    - Complete the installation.
3. **Verify Installation**:
    - Open Command Prompt (search for "cmd" in the Start menu).
    - Type `git --version` and press Enter. If Git is installed correctly, it will display the installed version[^2][^5].

---

## **2. Install Python**

Python is required to run the Crop Detector project.

1. **Download Python**:
    - Visit the official Python website (python.org) and download Python 3.x (ensure compatibility with version 3.6.12 as required by the project)[^3][^6].
2. **Install Python**:
    - Run the installer.
    - Check the box to "Add Python to PATH" during installation.
    - Choose default settings and complete the installation.
3. **Verify Installation**:
    - Open Command Prompt.
    - Type `python --version` and press Enter. It should display the installed version of Python[^3][^6].

---

## **3. Install Miniconda**

Miniconda is required to manage dependencies in an isolated environment.

1. **Download Miniconda**:
    - Visit Miniconda's official website and download the latest installer for Windows[^4][^7].
2. **Install Miniconda**:
    - Run the installer.
    - Follow the setup wizard and accept default settings.
    - Ensure that Miniconda is added to your system PATH during installation.
3. **Verify Installation**:
    - Open Command Prompt.
    - Type `conda --version` and press Enter to confirm that Miniconda is installed[^4][^7].

---

## **4. Clone the Repository**

1. Open Command Prompt or Git Bash.
2. Navigate to your desired directory using `cd <directory-path>`.
3. Clone the repository using:

```
git clone https://github.com/Surveinit/crop-detector.git
```

4. Navigate into the cloned folder:

```
cd crop-detector
```


---

## **5. Set Up a Conda Environment**

1. Create a new environment with Python 3.6.12:

```
conda create -n crop-detector python=3.6.12
```

2. Activate the environment:

```
conda activate crop-detector
```


---

## **6. Install Project Dependencies**

1. Ensure you are inside the project folder (`crop-detector`).
2. Install dependencies from `requirements.txt` using pip:

```
pip install -r requirements.txt
```


---

## **7. Run the Project**

1. Start the application by running:

```
python app.py
```

2. The application should now be running locally on your machine.

---
