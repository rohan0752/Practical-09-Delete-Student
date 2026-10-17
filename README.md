# Practical 9: Delete Operation (Student Record Removal)

## BCA (Hons.) React.js Practical 9

### 🎯 Objective
To implement the **Delete (D)** operation of CRUD in React with confirmation dialogs, safe removal using `Array.prototype.filter()`, and restore capabilities.

### 💡 Core Concepts Demonstrated
1. **Confirmation Safeguard**: Preventing accidental deletions by displaying an inline or modal confirmation prompt before deletion.
2. **Immutable Deletion Pattern**: Removing items cleanly from React state with `setStudents(prev => prev.filter(s => s.id !== studentId))`.
3. **Audit Tracking & Undo/Restore**: Keeping track of deleted counts and providing a one-click restore functionality to reset sample data.
4. **Empty State Handling**: Graceful UI when all records have been removed.

### 🚀 Running Locally
```bash
npm install
npm run dev
```

### 📦 Tech Stack
- React 19 / 18
- Vite
- Vanilla Modern CSS
