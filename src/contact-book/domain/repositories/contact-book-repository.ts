
export interface ContactBookRepository {

    addContact(): Promise<any>;
    editContact(): Promise<any>;
    addToFavorites(): Promise<any>;

}
