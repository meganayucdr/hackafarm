const angular = require('angular');

angular.module('reg')
    .constant('EVENT_INFO', {
        NAME: 'Hack a Farm 2019',
    })
    .constant('DASHBOARD', {
        UNVERIFIED: 'Cek kotak masuk email anda, anda seharusnya mendapatkan email dari panitia Hackafarm yang meminta anda untuk memverifiaksi email anda. Klik link pada email dan anda dapat memulai pendaftaran anda.',
        INCOMPLETE_TITLE: 'Mohon lengkapi form aplikasi anda!',
        INCOMPLETE: 'Jika anda tidak melengkapi aplikasi anda sebelum tanggal [APP_DEADLINE], anda tidak akan dapat melanjutkan ke tahap berikutnya!',
        SUBMITTED_TITLE: 'Aplikasi anda telah berhasil didaftarkan!',
        SUBMITTED: 'Aplikasi anda telah terdaftar, namun anda dapat mengubahnya kapan saja hingga waktu pendaftaran ditutup.\nAdmissions will be determined by a random lottery. Please make sure your information is accurate before registration is closed!',
        CLOSED_AND_INCOMPLETE_TITLE: 'Sayang sekali, pendaftaran telah ditutup. Dan proses seleksi awal telah dilakukan.',
        CLOSED_AND_INCOMPLETE: 'Maaf, karena anda tidak dapat melengkapi profil dan form pendaftaran tepat waktu, anda tidak dapat melanjutkan ke proses berikutnya.',
        ADMITTED_AND_CAN_CONFIRM_TITLE: 'Mohon untuk melakukan konfirmasi sebelum tanggal [CONFIRM_DEADLINE].',
        ADMITTED_AND_CANNOT_CONFIRM_TITLE: 'Waktu konfirmasi anda [CONFIRM_DEADLINE] telah berakhir.',
        ADMITTED_AND_CANNOT_CONFIRM: 'Meskipun ide anda telah lolos, anda tidak melengkapi konfirmasi tepat waktu.\nSayang sekali, hal ini berarti anda tidak dapat menghadiri acara hackathon. \nKami berharap jika anda dapat mengikuti acara hackathon tahun depan!',
        CONFIRMED_NOT_PAST_TITLE: 'Anda dapat mengubah informasi konfirmasi anda sampai tanggal [CONFIRM_DEADLINE]',
        DECLINED: 'Sayang sekali jika anda tidak dapat menghadiri acara hackathon Hack a Farm 2019! :(\nKami berharap jika anda dapat ikut untuk tahun depan.',
    })
    .constant('TEAM',{
        NO_TEAM_REG_CLOSED: 'Sayang sekali, anda terlambat untuk mengikuti proses undian tim. \nTetapi, anda masih dapat membuat tim sendiri sebelum dan saat event berlangsung!',
    });
