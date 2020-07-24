// Question:

Transcribe To mRNA
Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription.DNA has the bases A, T, G and C, while RNA has U in place of T and all of the other bases remains the same.

  Examples
dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"

dnaToRna("CGATATA") ➞ "GCUAUAU"

dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"



// Answer:

function dnaToRna(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "U"
    } else if (dna[i] === "T") {
      result += "A"
    } else if (dna[i] === "G") {
      result += "C"
    } else if (dna[i] === "C") {
      result += "G"
    }
  }
  return result
}
