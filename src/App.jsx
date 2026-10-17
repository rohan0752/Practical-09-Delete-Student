import { useState } from 'react';
import './App.css';

const initialStudents = [
  { id: 1, name: 'Rahul Sharma', course: 'BCA (Hons.)', semester: 5, email: 'rahul@example.com', phone: '9876543210' },
  { id: 2, name: 'Priya Patel', course: 'BCA', semester: 3, email: 'priya@example.com', phone: '9876543211' },
  { id: 3, name: 'Amit Kumar', course: 'MCA', semester: 2, email: 'amit@example.com', phone: '9876543212' },
  { id: 4, name: 'Sneha Gupta', course: 'B.Tech CSE', semester: 7, email: 'sneha@example.com', phone: '9876543213' },
  { id: 5, name: 'Vikram Singh', course: 'BCA (Hons.)', semester: 5, email: 'vikram@example.com', phone: '9876543214' },
  { id: 6, name: 'Neha Joshi', course: 'BCA', semester: 1, email: 'neha@example.com', phone: '9876543215' },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [deletingId, setDeletingId] = useState(null);
  const [showSuccess, setShowSuccess] = useState('');
  const [deletedCount, setDeletedCount] = useState(0);

  const handleDeleteClick = (id) => {
    setDeletingId(id);
  };

  const handleConfirmDelete = (student) => {
    setStudents(prev => prev.filter(s => s.id !== student.id));
    setDeletingId(null);
    setDeletedCount(prev => prev + 1);
    setShowSuccess(`"${student.name}" has been removed.`);
    setTimeout(() => setShowSuccess(''), 3000);
  };

  const handleCancelDelete = () => {
    setDeletingId(null);
  };

  const handleResetAll = () => {
    setStudents(initialStudents);
    setDeletedCount(0);
    setShowSuccess('All students restored!');
    setTimeout(() => setShowSuccess(''), 3000);
  };

  return (
    <div className="app">
      <header className="app-header">
        <span className="brand-icon">🗑️</span>
        <h1>Student Management — Delete Operation</h1>
        <p className="header-subtitle">Remove students with confirmation — BCA Practical 9</p>
      </header>

      <main className="main-content">
        {showSuccess && <div className="toast-success">✅ {showSuccess}</div>}

        <div className="stats-bar">
          <span className="stat">Total Students: <strong>{students.length}</strong></span>
          <span className="stat">Deleted: <strong>{deletedCount}</strong></span>
          {deletedCount > 0 && (
            <button className="btn btn-outline btn-small" onClick={handleResetAll}>🔄 Restore All</button>
          )}
        </div>

        {students.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <h3>No Students</h3>
            <p>All students have been removed.</p>
            <button className="btn btn-primary" onClick={handleResetAll}>🔄 Restore All Students</button>
          </div>
        ) : (
          <div className="student-table-wrapper">
            <table className="student-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className={deletingId === student.id ? 'deleting' : ''}>
                    <td>{index + 1}</td>
                    <td className="name-cell">
                      <span className="avatar">{student.name.charAt(0)}</span>
                      {student.name}
                    </td>
                    <td><span className="course-badge">{student.course}</span></td>
                    <td>Sem {student.semester}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                      {deletingId === student.id ? (
                        <div className="confirm-actions">
                          <button className="btn btn-danger btn-small" onClick={() => handleConfirmDelete(student)}>Confirm</button>
                          <button className="btn btn-outline btn-small" onClick={handleCancelDelete}>Cancel</button>
                        </div>
                      ) : (
                        <button className="btn btn-danger-outline btn-small" onClick={() => handleDeleteClick(student.id)}>🗑️ Delete</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="concept-box">
          <h3>💡 How Delete Works</h3>
          <p>Clicking "Delete" shows a <strong>confirmation step</strong>. On confirm, the student is removed from the React state array using <code>filter()</code>. The UI updates immediately because React re-renders when state changes.</p>
          <pre className="code-block">{`setStudents(prev => prev.filter(s => s.id !== studentId));`}</pre>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Student Management — BCA Practical 9</p>
      </footer>
    </div>
  );
}

export default App;
