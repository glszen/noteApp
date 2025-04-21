import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [notes, setNotes] = useState([]); // Notları saklamak için state
  const [noteText, setNoteText] = useState(''); // Not metni için state
  const [noteColor, setNoteColor] = useState('#000000'); // Not rengi için state
  const [searchText, setSearchText] = useState(''); // Arama metni için state

  // Not metni için input handler
  const noteInputHandler = (e) => {
    setNoteText(e.target.value);
  };

  // Renk seçici için handler
  const colorInputHandler = (e) => {
    setNoteColor(e.target.value);
  };

  // Arama metni için input handler
  const searchInputHandler = (e) => {
    setSearchText(e.target.value);
  };

  // Not ekleme fonksiyonu
  const addNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, { text: noteText, color: noteColor }]); // Notu metin ve renk ile kaydet
      setNoteText(''); // Not metnini temizle
      setNoteColor('#000000'); // Renk seçiciyi sıfırla
    } else {
      alert('Please enter a note');
    }
  };

  return (
    <div className='container pt-5 mulish' style={{ height: '130vh' }}>
      <div className='row justify-content-center p-4'>
        <Typography variant="h4" component="h1" className="text-center">
          Note App
        </Typography>
      </div>

      <div className="main">
        {/* Not ekleme alanı */}
        <Card className="mb-4 p-3">
          <CardContent>
            <Typography variant="h6" component="h2" className="mb-3">
              Add a New Note
            </Typography>
            <TextField
              id="note-input"
              value={noteText}
              onChange={noteInputHandler}
              variant="outlined"
              fullWidth
              label="Enter your note"
              className="mb-3"
            />
            <input
              type="color"
              value={noteColor}
              onChange={colorInputHandler}
              className="mt-2"
              style={{
                width: '100%',
                height: '40px',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '15px',
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={addNote}
            >
              Add Note
            </Button>
          </CardContent>
        </Card>

        {/* Arama alanı */}
        <Card className="mb-4 p-3">
          <CardContent>
            <Typography variant="h6" component="h2" className="mb-3">
              Search Notes
            </Typography>
            <TextField
              id="search-input"
              value={searchText}
              onChange={searchInputHandler}
              variant="outlined"
              fullWidth
              label="Search"
            />
          </CardContent>
        </Card>

        <div className="notes-list d-flex justify-content-center align-items-center">
  <div className="row justify-content-center">
    {notes
      .filter((note) =>
        note.text.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((note, index) => (
        <div className="col-md-4 mb-3 d-flex justify-content-center" key={index}>
          <Card
            style={{
              backgroundColor: note.color,
              width: '200px', // Sabit genişlik
              height: '120px', // Sabit yükseklik
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  wordWrap: 'break-word',
                }}
              >
                {note.text}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
  </div>
</div>
      </div>
    </div>
  );
}

export default App;