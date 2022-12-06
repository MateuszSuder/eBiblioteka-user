# Szablon dla serwisów eBiblioteki

## Wymagania
- Node 19.2.0
- npm 8.19.3

## Struktura
```
|
├── Dockerfile 1.
├── package.json 2.
└── src
    ├── config 3.
    │   └── db 3.1
    ├── framework 4.
    │   └── middlewares 4.1
    ├── schemas 5.
    ├── server 6.
    │   ├── routes 6.1 
    │   └── router.js 6.2
    ├── services 7.
    ├── http 8.
    │   └── internalFetcher 8.1 
    └── index.js 9.
    
1. Konfiguracja kontynera serwisu.
2. Konfiguracja paczki js'owej.
3. Pliki konfiguracyjne
3.1 Plik do połączenia z bazą
4. Folder zawierający wszelkiego rodzaju modyfikacje czy pipe dla frameworka
4.1 Folder z tzw. middlewarami, czyli funkcje, które są wykonywane między requestem a logiką
5. Schemy do mongoose
6. Pliki serwerowe
6.1 Endpointy do serwisów. Każdy folder to inny endpoint. Np routes/health to request na URL/health
7. Logika biznesowa
8. Zapytania http
8.1 Fetcher do zapytań http międzyserwisowych
9. Entry point serwera. Zawiera start serwera.
```