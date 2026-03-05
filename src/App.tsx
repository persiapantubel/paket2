import { useState, useEffect } from 'react';
import { soalData } from './data/soal';
import { Box } from './components/Box';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Trophy,
  RotateCcw,
  GraduationCap,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import './App.css';

// Tipe untuk menyimpan jawaban user
interface JawabanUser {
  soalId: number;
  pilihan: string | null;
  sudahDijawab: boolean;
}

// Tipe untuk status aplikasi
type AppStatus = 'quiz' | 'result';

function App() {
  // State utama
  const [soalAktif, setSoalAktif] = useState(1);
  const [jawabanList, setJawabanList] = useState<JawabanUser[]>([]);
  const [status, setStatus] = useState<AppStatus>('quiz');

  // Inisialisasi jawaban list
  useEffect(() => {
    const initialJawaban = soalData.map(soal => ({
      soalId: soal.id,
      pilihan: null as string | null,
      sudahDijawab: false
    }));
    setJawabanList(initialJawaban);
  }, []);

  // Data soal aktif
  const currentData = soalData.find(s => s.id === soalAktif);
  const jawabanSaatIni = jawabanList.find(j => j.soalId === soalAktif);
  const sudahDijawab = jawabanSaatIni?.sudahDijawab || false;
  const pilihanTerpilih = jawabanSaatIni?.pilihan || null;

  // Hitung progress
  const soalTerjawab = jawabanList.filter(j => j.sudahDijawab).length;
  const progress = (soalTerjawab / soalData.length) * 100;

  // Hitung score
  const hitungScore = () => {
    let benar = 0;
    jawabanList.forEach((jawaban) => {
      if (jawaban.sudahDijawab) {
        const soal = soalData.find(s => s.id === jawaban.soalId);
        if (soal && jawaban.pilihan === soal.kunci) {
          benar++;
        }
      }
    });
    return benar;
  };

  // Handle pilih jawaban
  const handlePilihJawaban = (label: string) => {
    if (sudahDijawab) return; // Tidak bisa ganti jawaban setelah menjawab
    
    const newJawabanList = jawabanList.map(j => 
      j.soalId === soalAktif 
        ? { ...j, pilihan: label, sudahDijawab: true }
        : j
    );
    setJawabanList(newJawabanList);
  };

  // Navigasi soal
  const keSoalSebelumnya = () => {
    if (soalAktif > 1) {
      setSoalAktif(soalAktif - 1);
    }
  };

  const keSoalBerikutnya = () => {
    if (soalAktif < soalData.length) {
      setSoalAktif(soalAktif + 1);
    }
  };

  const keSoal = (id: number) => {
    setSoalAktif(id);
  };

  // Selesai dan lihat hasil
  const selesaiQuiz = () => {
    setStatus('result');
  };

  // Reset quiz
  const resetQuiz = () => {
    const initialJawaban = soalData.map(soal => ({
      soalId: soal.id,
      pilihan: null as string | null,
      sudahDijawab: false
    }));
    setJawabanList(initialJawaban);
    setSoalAktif(1);
    setStatus('quiz');
  };

  // Render halaman hasil
  const renderHasil = () => {
    const score = hitungScore();
    const persentase = (score / soalData.length) * 100;
    
    let pesan = '';
    let warna = '';
    if (persentase >= 80) {
      pesan = 'Luar biasa! 🎉';
      warna = 'text-green-600';
    } else if (persentase >= 60) {
      pesan = 'Bagus! 👍';
      warna = 'text-blue-600';
    } else if (persentase >= 40) {
      pesan = 'Cukup baik 💪';
      warna = 'text-yellow-600';
    } else {
      pesan = 'Terus berlatih! 📚';
      warna = 'text-red-600';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">
                Hasil Latihan Figural
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <p className={`text-2xl font-bold ${warna}`}>{pesan}</p>
                <p className="text-gray-600 mt-2">{score} dari {soalData.length} soal benar</p>
              </div>
              
              <div className="relative w-48 h-48 mx-auto">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke={persentase >= 60 ? '#4f46e5' : '#ef4444'}
                    strokeWidth="16"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(persentase / 100) * 552} 552`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-800">{Math.round(persentase)}%</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-green-600">{score}</p>
                  <p className="text-sm text-green-700">Benar</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-red-600">{soalData.length - score}</p>
                  <p className="text-sm text-red-700">Salah</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-blue-600">{soalTerjawab}</p>
                  <p className="text-sm text-blue-700">Dijawab</p>
                </div>
              </div>

              {/* Daftar jawaban */}
              <div className="text-left mt-6">
                <h3 className="font-bold text-gray-700 mb-3 text-center">Review Jawaban</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {soalData.map((soal) => {
                    const jawaban = jawabanList.find(j => j.soalId === soal.id);
                    const isCorrect = jawaban?.pilihan === soal.kunci;
                    const isAnswered = jawaban?.sudahDijawab;
                    
                    return (
                      <button
                        key={soal.id}
                        onClick={() => {
                          setSoalAktif(soal.id);
                          setStatus('quiz');
                        }}
                        className={cn(
                          "w-12 h-12 rounded-lg font-bold text-sm transition-all",
                          !isAnswered && "bg-gray-100 text-gray-500 hover:bg-gray-200",
                          isAnswered && isCorrect && "bg-green-100 text-green-700 hover:bg-green-200",
                          isAnswered && !isCorrect && "bg-red-100 text-red-700 hover:bg-red-200"
                        )}
                      >
                        {soal.id}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button 
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 h-auto"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Coba Lagi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  // Render halaman quiz
  const renderQuiz = () => {
    if (!currentData) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-gray-800 text-lg">Latihan Soal Figural</h1>
                  <p className="text-sm text-gray-500">Paket 1 - Tipe Baru</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {soalTerjawab}/{soalData.length} Dijawab
              </Badge>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-6">
          {/* Navigation Soal */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <p className="text-sm text-gray-500 mb-3">Navigasi Soal:</p>
            <div className="flex flex-wrap gap-2">
              {soalData.map((soal) => {
                const jawaban = jawabanList.find(j => j.soalId === soal.id);
                const isActive = soal.id === soalAktif;
                const isAnswered = jawaban?.sudahDijawab;
                const isCorrect = isAnswered && jawaban.pilihan === soal.kunci;
                
                return (
                  <button
                    key={soal.id}
                    onClick={() => keSoal(soal.id)}
                    className={cn(
                      "w-10 h-10 rounded-lg font-semibold text-sm transition-all",
                      isActive && "ring-2 ring-indigo-500 ring-offset-2",
                      !isAnswered && !isActive && "bg-gray-100 text-gray-600 hover:bg-gray-200",
                      isAnswered && isCorrect && !isActive && "bg-green-100 text-green-700",
                      isAnswered && !isCorrect && !isActive && "bg-red-100 text-red-700",
                      isActive && !isAnswered && "bg-indigo-600 text-white",
                      isActive && isAnswered && isCorrect && "bg-green-600 text-white",
                      isActive && isAnswered && !isCorrect && "bg-red-600 text-white"
                    )}
                  >
                    {soal.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Soal Section */}
          <Card className="shadow-lg border-0 mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-indigo-600 text-white shrink-0">Soal {currentData.id}</Badge>
                <p className="text-gray-600 text-sm">Lanjutkan pola berikut!</p>
              </div>
            </CardHeader>
            <CardContent>
              {/* Kotak Pola */}
              <div className="mb-8 overflow-x-auto pb-4">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Pola:</h3>
                <div className="flex gap-4 md:gap-6 min-w-max">
                  {currentData.boxes.map((box, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="font-extrabold text-xl mb-2 text-gray-700">{idx + 1}</span>
                      <Box data={box} />
                    </div>
                  ))}
                  <div className="flex flex-col items-center">
                    <span className="font-extrabold text-xl mb-2 text-gray-700">?</span>
                    <Box isQuestionMark />
                  </div>
                </div>
              </div>

              {/* Pilihan Jawaban */}
              <div className="overflow-x-auto pb-4">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Pilihan Jawaban:</h3>
                <div className="flex gap-4 md:gap-6 min-w-max">
                  {currentData.options.map((opt) => {
                    const isSelected = pilihanTerpilih === opt.label;
                    const isCorrect = isSelected && currentData.kunci === opt.label;
                    const isWrong = isSelected && currentData.kunci !== opt.label;

                    return (
                      <Box
                        key={opt.label}
                        data={{
                          center: opt.center as any,
                          tl: opt.tl as any,
                          tr: opt.tr as any,
                          bl: opt.bl as any,
                          br: opt.br as any
                        }}
                        label={opt.label}
                        isSelected={isSelected}
                        isCorrect={isCorrect}
                        isWrong={isWrong}
                        onClick={() => handlePilihJawaban(opt.label)}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Pembahasan */}
              {sudahDijawab && (
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-amber-800 text-lg">Pembahasan Soal {currentData.id}</h3>
                    <Badge className="bg-amber-600 text-white ml-auto">
                      Kunci: {currentData.kunci}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    {currentData.pembahasan.map((langkah, index) => (
                      <p key={index} className="text-amber-900 leading-relaxed">
                        {langkah}
                      </p>
                    ))}
                  </div>
                  
                  {/* Status jawaban */}
                  <div className="mt-4 pt-4 border-t border-amber-200 flex items-center gap-2">
                    {pilihanTerpilih === currentData.kunci ? (
                      <>
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <span className="font-bold text-green-700">Jawaban Anda Benar! 🎉</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-red-600" />
                        <span className="font-bold text-red-700">
                          Jawaban Anda: {pilihanTerpilih}. Yang benar: {currentData.kunci}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={keSoalSebelumnya}
              disabled={soalAktif === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Sebelumnya
            </Button>

            {soalAktif === soalData.length ? (
              <Button
                onClick={selesaiQuiz}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Lihat Hasil
              </Button>
            ) : (
              <Button
                onClick={keSoalBerikutnya}
                className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2"
              >
                Berikutnya
                <ChevronRight className="w-5 h-5" />
              </Button>
            )}
          </div>
        </main>
      </div>
    );
  };

  // Render berdasarkan status
  return status === 'result' ? renderHasil() : renderQuiz();
}

export default App;
