import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import axios from 'axios';
import './DesignEditor.css';

const DesignEditor = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState([]);
  const [font, setFont] = useState('Arial');

  const handleSendToWhatsApp = async () => {
    let imageUrls = [];

    for (let img of images) {
      const formData = new FormData();
      formData.append('file', dataURLtoFile(img.src, 'image.png'));

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        imageUrls.push(response.data.url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    const whatsappMessage = 'Olá, gostaria de personalizar uma camiseta com esta estampa: ';
    const imageUrl = imageUrls.map((url) => `Imagem: ${url}`).join('\n');
    const textUrl = text.map((t) => `Texto: ${t.content} - Fonte: ${t.font}`).join('\n');
    const whatsappURL = `https://api.whatsapp.com/send?phone=11971552389&text=${encodeURIComponent(
      `${whatsappMessage}\n${imageUrl}\n${textUrl}`
    )}`;
    window.open(whatsappURL, '_blank');
  };

  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImages([...images, { id: Date.now(), src: reader.result, x: 50, y: 50, width: 200, height: 200 }]);
    };
    reader.readAsDataURL(file);
  };

  const addText = () => {
    setText([...text, { id: Date.now(), content: 'Novo Texto', font, x: 50, y: 50, width: 200, height: 50 }]);
  };

  const updateTextContent = (id, content) => {
    setText(text.map((t) => (t.id === id ? { ...t, content } : t)));
  };

  const deleteText = (id) => {
    setText(text.filter((t) => t.id !== id));
  };

  const deleteImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="design-editor">
      <h1>Personalize Sua Estampa</h1>
      <div className="canvas-container">
        <div className="tshirt-container">
          <img
            src={`${process.env.PUBLIC_URL}/img/tshirt-template.jpg`}
            alt="T-shirt Template"
            className="tshirt-template"
          />
          {images.map((img) => (
            <Rnd
              key={img.id}
              size={{ width: img.width, height: img.height }}
              position={{ x: img.x, y: img.y }}
              onDragStop={(e, d) => {
                setImages(images.map((i) => (i.id === img.id ? { ...i, x: d.x, y: d.y } : i)));
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                setImages(images.map((i) => (i.id === img.id ? {
                  ...i,
                  width: ref.style.width,
                  height: ref.style.height,
                  x: position.x,
                  y: position.y
                } : i)));
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={img.src}
                  alt="Design"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
                <button className="delete-button" onClick={() => deleteImage(img.id)}>X</button>
              </div>
            </Rnd>
          ))}
          {text.map((t) => (
            <Rnd
              key={t.id}
              size={{ width: t.width, height: t.height }}
              position={{ x: t.x, y: t.y }}
              onDragStop={(e, d) => {
                setText(text.map((txt) => (txt.id === t.id ? { ...txt, x: d.x, y: d.y } : txt)));
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                setText(text.map((txt) => (txt.id === t.id ? {
                  ...txt,
                  width: ref.style.width,
                  height: ref.style.height,
                  x: position.x,
                  y: position.y
                } : txt)));
              }}
            >
              <div style={{ position: 'relative' }}>
                <textarea
                  style={{ fontFamily: t.font, fontSize: '16px', width: '100%', height: '100%' }}
                  value={t.content}
                  onChange={(e) => updateTextContent(t.id, e.target.value)}
                />
                <button className="delete-button" onClick={() => deleteText(t.id)}>X</button>
              </div>
            </Rnd>
          ))}
        </div>
      </div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div>
        <select onChange={(e) => setFont(e.target.value)} value={font}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <button onClick={addText} className="add-text-button">
          Adicionar Texto
        </button>
      </div>
      <button onClick={handleSendToWhatsApp} className="send-button">
        Enviar para WhatsApp
      </button>
    </div>
  );
};

export default DesignEditor;
