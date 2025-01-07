import React, { useState } from 'react';
import './Memo.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Memo = () => {
  const [memo, setMemo] = useState('');
  const [memos, setMemos] = useState([]);
  const [priority, setPriority] = useState('');

  const handleAddMemo = () => {
    if (memo.trim() === '') return;
    setMemos([...memos, { text: memo, priority }]);
    setMemo('');
    setPriority('');
  };

  const handleDeleteMemo = (indexToDelete) => {
    setMemos(memos.filter((_, index) => index !== indexToDelete));
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'urgent';
      case 'important':
        return 'important';
      case 'task':
        return 'task';
      default:
        return '';
    }
  };

  return (
    <div className='components'>
      <Header />
      <div className="container">
        <header className="main-title">
          <h1>업무메모</h1>
        </header>
        <div className="main">
          <div className="memo-list">
            {memos.map((item, index) => (
              <div key={index} className={`memo-item ${getPriorityClass(item.priority)}`}>
                <span>{item.text}</span>
                <button onClick={() => handleDeleteMemo(index)} className="delete-button">
                  삭제
                </button>
              </div>
            ))}
          </div>
          <div className="memo-input">
            <div className="priority-selector">
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="urgent"
                  checked={priority === 'urgent'}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <span className="urgent">긴급</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="important"
                  checked={priority === 'important'}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <span className="important">중요</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="task"
                  checked={priority === 'task'}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <span className="task">업무</span>
              </label>
            </div>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="메모를 입력하세요"
              className="textarea"
            />
            <button onClick={handleAddMemo} className="register-button">
              등록
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Memo;
