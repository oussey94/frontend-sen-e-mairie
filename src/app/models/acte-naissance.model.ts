import { Time } from "@angular/common";

export class Acte_Naissance {
    id: number;
    region: string;
    departement: string;
    arrondissement: string;
    collectivité_locale: string;
    centre: string;
    annee_extrait_int: Date;
    annee_extrait_string: string;
    num_extrait_int: number;
    num_extrait_string: string;
    date_naissance: Date;
    heure_naissance: Time;
    sexe_enfant: string;
    lieu_de_naissance: string;
    nom_enfant: string;
    prenom_enfant: string;
    prenom_pere: string;
    nom_maman: string;
    prenom_maman: string;
    pays_naissance: string;
}