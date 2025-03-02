# AI based crop detector

## Installation guide

### **1. Install Git**

Git is required to clone the project repository.

1. **Verify Installation**:
    - Open Command Prompt
    - Type `git --version` and press Enter. If Git is installed correctly, it will display the installed version.


### **2. Install Python**

Python is required to run the Crop Detector project.

1. **Verify Installation**:
    - Open Command Prompt.
    - Type `python --version` and press Enter. It should display the installed version of Python[^3][^6].


### **3. Install Miniconda**

Miniconda is required to manage dependencies in an isolated environment.

1. **Verify Installation**:
    - Open Command Prompt.
    - Type `conda --version` and press Enter to confirm that Miniconda is installed[^4][^7].


### **4. Clone the Repository**

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



### **5. Set Up a Conda Environment**

1. Create a new environment with Python 3.6.12:

```
conda create -n crop-detector python=3.6.12
```

2. Activate the environment:

```
conda activate crop-detector
```



### **6. Install Project Dependencies**

1. Install dependencies from `requirements.txt` using pip:

```
pip install -r requirements.txt
```



### **7. Run the Project**

1. Start the application by running:

```
python app.py
```

