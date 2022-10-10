import React from "react";
import { MultiSelectComponent, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import styles from './CreateNFT.module.scss'
import './Select.css'
import Button from "../Button";

const genreData = [
    { "id": "Action", "title": "Action" },
    { "id": "Biography & Memoir", "title": "Biography & Memoir" },
    { "id": "Children's", "title": "Children's" },
    { "id": "Classics", "title": "Classics" },
    { "id": "Comics, Manga & Graphic Novels", "title": "Comics, Manga & Graphic Novels" },
    { "id": "Erotica", "title": "Erotica" },
    { "id": "Fantasy", "title": "Fantasy" },
    { "id": "Historical Fiction", "title": "Historical Fiction" },
    { "id": "Horror", "title": "Horror" },
    { "id": "Humor", "title": "Humor" },
    { "id": "Isekai", "title": "Isekai" },
    { "id": "Mystery & Thriller", "title": "Mystery & Thriller" },
    { "id": "Mythology", "title": "Mythology" },
    { "id": "NFT Lore", "title": "NFT Lore" },
    { "id": "Non-Fiction", "title": "Non-Fiction" },
    { "id": "Parody", "title": "Parody" },
    { "id": "Poetry", "title": "Poetry" },
    { "id": "Religion", "title": "Religion" },
    { "id": "Romance", "title": "Romance" },
    { "id": "Science Fiction", "title": "Science Fiction" },
    { "id": "Short Story Collection", "title": "Short Story Collection" },
    { "id": "Space Opera", "title": "Space Opera" },
    { "id": "Sports", "title": "Sports" },
    { "id": "Steampunk", "title": "Steampunk" },
    { "id": "True Crime", "title": "True Crime" },
    { "id": "Westerns", "title": "Westerns" },
    { "id": "Young Adult", "title": "Young Adult" },
]

const languageData = [
    { "id": 'EN', "title": "EN" },
    { "id": 'ES', "title": "ES" },
    { "id": 'FR', "title": "FR" },
    { "id": 'PT', "title": "PT" },
    { "id": 'DE', "title": "DE" },
    { "id": 'RU', "title": "RU" },
    { "id": 'JA', "title": "JA" },
    { "id": 'ZH', "title": "ZH" },
]

const promptData = [
    { "id": 'AGAPE', "title": "AGAPE" },
    { "id": 'APRON', "title": "APRON" },
    { "id": 'ATONE', "title": "ATONE" },
    { "id": 'AWFUL', "title": "AWFUL" },
    { "id": 'BEADY', "title": "BEADY" },
    { "id": 'BERTH', "title": "BERTH" },
    { "id": 'BLAND', "title": "BLAND" },
    { "id": 'BLOWN', "title": "BLOWN" },
    { "id": 'BRINK', "title": "BRINK" },
    { "id": 'CACAO', "title": "CACAO" },
    { "id": 'DONOR', "title": "DONOR" },
    { "id": 'DROLL', "title": "DROLL" },
    { "id": 'EGRET', "title": "EGRET" },
    { "id": 'FIELD', "title": "FIELD" },
    { "id": 'FLOAT', "title": "FLOAT" },
    { "id": 'FLOOD', "title": "FLOOD" },
    { "id": 'FLUFF', "title": "FLUFF" },
    { "id": 'GAWKY', "title": "GAWKY" },
    { "id": 'GIRTH', "title": "GIRTH" },
    { "id": 'GLOAT', "title": "GLOAT" },
    { "id": 'GOOSE', "title": "GOOSE" },
    { "id": 'HUTCH', "title": "HUTCH" },
    { "id": 'INPUT', "title": "INPUT" },
    { "id": 'LILAC', "title": "LILAC" },
    { "id": 'LIVER', "title": "LIVER" },
    { "id": 'LOSER', "title": "LOSER" },
    { "id": 'MADAM', "title": "MADAM" },
    { "id": 'NIGHT', "title": "NIGHT" },
    { "id": 'PIETY', "title": "PIETY" },
    { "id": 'PINTO', "title": "PINTO" },
    { "id": 'PRIMO', "title": "PRIMO" },
    { "id": 'RETRO', "title": "RETRO" },
    { "id": 'ROOMY', "title": "ROOMY" },
    { "id": 'RUSTY', "title": "RUSTY" },
    { "id": 'SEVER', "title": "SEVER" },
    { "id": 'SMITE', "title": "SMITE" },
    { "id": 'STEAD', "title": "STEAD" },
    { "id": 'TRAIT', "title": "TRAIT" },
    { "id": 'VOICE', "title": "VOICE" },
    { "id": 'WEDGE', "title": "WEDGE" },
]

const fields = { text: 'title', value: 'id' }

const CreateNFT = (props) => {
    const {
        minting,
        pdfName,
        setActivePdfModal,
        setPdfUrl,
        setPdfName,
        setTitle,
        setAuthor,
        setDescription,
        imageName,
        setImageName,
        setArtist,
        setGenre,
        setLanguage,
        setQty,
        onPdfChange,
        onImageChange,
        create
    } = props
    return (
        <div className={styles.div}>
            <div className="d_flex justify_content_between align_items_center">
                <div className="h6">My book</div>
                <Button value="Preview" style={{ width: 106, height: 32 }}
                    disabled={pdfName === 'No file choosen'}
                    onClick={e => setActivePdfModal(true)} red />
            </div>
            <form>
                <div className={styles.row}>
                    <div className="caption grey60"> Pdf file </div>
                    <input
                        type="file"
                        onChange={(e) => {
                            onPdfChange(e.target.files[0])
                            setPdfName(e.target.files[0].name)
                            setPdfUrl(URL.createObjectURL(e.target.files[0]))
                        }}
                        accept="application/pdf"
                        id="pdf"
                        autoComplete="off"
                        hidden
                    />
                    <div className="d_flex align_items_center">
                        <label htmlFor="pdf" className={styles.btnFile}>
                            Select
                        </label>
                        <span className="body_1 ml_10">{pdfName}</span>
                    </div>
                </div>
                <div className="caption grey60 mt_5 ml_10">
                    Please use a standard letter-size PDF of 8.5x11" with 1" margins and a font size of 12pt or greater. The first page should be your book cover.
                </div>
                <div className={styles.row}>
                    <div className="caption grey60"> Book title </div>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        name="title"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className={styles.row}>
                    <div className="caption grey60"> Author(s) </div>
                    <input
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        id="author"
                        name="author"
                        autoComplete="off"
                    />
                </div>
                <div className="caption grey60 mt_5 ml_10"> Separate by comma </div>
                <div className={styles.row}>
                    <div className="caption grey60"> Description </div>
                    <textarea
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        name="description"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="h6 mt_25">Image</div>
                <div className="caption grey60 mt_8">Recommend 1224 x 1584 pixel, Letter size</div>
                <div className={styles.row_group}>
                    <div className={styles.row}>
                        <div className="caption grey60"> Book cover image </div>
                        <input
                            type="file"
                            onChange={(e) => {
                                setImageName(e.target.files[0].name)
                                onImageChange(e.target.files[0])
                            }}
                            accept="image/*"
                            id="image"
                            hidden
                            autoComplete="off"
                        />
                        <div className="d_flex align_items_center">
                            <label htmlFor="image" className={styles.btnFile}>
                                Select
                            </label>
                            <span className="body_1 ml_10">{imageName}</span>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className="caption grey60"> Artist(s) </div>
                        <input
                            type="text"
                            onChange={(e) => setArtist(e.target.value)}
                            id="artist"
                            name="artist"
                            required
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="h6 mt_25">Meta data</div>
                <div className={styles.row}>
                    <div className="caption grey60"> Genre </div>
                    <MultiSelectComponent
                        id="genre"
                        name="genre"
                        dataSource={genreData}
                        mode="Delimiter"
                        fields={fields}
                        change={e => setGenre(e.value)} />
                </div>
                <div className={styles.row_group}>
                    <div className={styles.row}>
                        <div className="caption grey60"> Language </div>
                        <DropDownListComponent
                            id="language"
                            name="language"
                            dataSource={languageData}
                            fields={fields} popupHeight="auto"
                            change={e => setLanguage(e.value)} />
                    </div>
                    <div className={styles.row}>
                        <div className="caption grey60"> Quantity (max. 1000) </div>
                        <input
                            type="number"
                            onChange={(e) => setQty(e.target.value)}
                            id="qty"
                            name="qty"
                            required
                            autoComplete="off"
                        />
                    </div>
                </div>
                <Button value="Create" redBg onClick={create} disabled={minting}
                    style={{ width: '100%', height: 56, marginTop: 25 }} />
            </form>
        </div>
    );
}

export default CreateNFT
