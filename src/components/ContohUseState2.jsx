import React, { useState, useEffect } from 'react';

function ContohUseState2() {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [namaPacar, setNamaPacar] = useState('');

  useEffect(() => {
    if (pacarSaya > 1) {
      setNamaPacar('Siti Maemunah');
    } else {
      setNamaPacar('Zahar');
    }
  }, [pacarSaya]);
  //   Lifecycle React, pakai [], sebagai trigger juga, sebelumnya dikasih logika dahulu

  return (
    <div>
      <h3>Nama Pacar: {namaPacar}</h3>
      <h1>Saya memiliki pacar sekitar : {pacarSaya}</h1>
      <button onClick={() => setPacarSaya((AWW) => AWW + 1)}>Tambah pacarnya kak</button>
      <button onClick={() => setPacarSaya((AWW) => AWW - 1)}>Ngga dulu deh kak</button>
    </div>
  );
}

export default ContohUseState2;
