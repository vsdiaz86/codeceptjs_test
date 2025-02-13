const { I, NotesAppPage } = inject();
const timeout = 60;
const FIELD_VALUE = '<VALUE>';
let noteID;


//#region .: Addying a new note :.

Given('I am already on the Notes App main page', async () => {
    await NotesAppPage.accessLoginPage();
});

When('I click on the add note button', async () => {
    await NotesAppPage.click(NotesAppPage.addNotesButton);
});

When('I fill the field title with the value {string}', async (title) => {
    await NotesAppPage.fillField(NotesAppPage.titleInputField, title);
});

When('I fill the field body with the value {string}', async (body) => {
    within({ frame: NotesAppPage.bodyIframe }, () => {
        NotesAppPage.fillField(NotesAppPage.bodyInputField, body);
    });
});

When('I click on the save button', async () => {
    await NotesAppPage.click(NotesAppPage.saveNotesButton);
});

Then('I can see a new note with the title {string}', async (title) => {
    await I.waitForElement(NotesAppPage.titleDescField.replace(FIELD_VALUE, title), timeout);
});

Then('I can see a new note with the content {string}', async (body) => {
    await I.waitForElement(NotesAppPage.contentDescField.replace(FIELD_VALUE, body), timeout);
});

//#endregion

//#region .: Editing note informations :.

Given('I am already have a note added with the title {string}', async (title) => {
    await NotesAppPage.accessLoginPage();
    await I.waitForElement(NotesAppPage.titleDescField.replace(FIELD_VALUE, title), timeout);
});

When('I click on the edit button', async () => {
    await NotesAppPage.click(NotesAppPage.editNotesButton);
});

//#endregion

//#region .: Editing note informations :.

Given('I am already have a note added with the title {string}', async (title) => {
    await NotesAppPage.accessLoginPage();
    await I.waitForElement(NotesAppPage.titleDescField.replace(FIELD_VALUE, title), timeout);
});

When('I click on the edit button', async () => {
    await NotesAppPage.click(NotesAppPage.editNotesButton);
});

//#endregion

//#region .: Deleting note  :.

Given('I am already have a note added with the title {string}', async (title) => {
    await NotesAppPage.accessLoginPage();
    await I.waitForElement(NotesAppPage.titleDescField.replace(FIELD_VALUE, title), timeout);
});

When('I click on the delete button', async () => {
    await NotesAppPage.doubleClick(NotesAppPage.deleteNotesButton);
});

Then('I cannot see a note with the title {string}', async (title) => {
    await I.dontSeeElement(NotesAppPage.titleDescField.replace(FIELD_VALUE, title), timeout);
});


//#endregion

