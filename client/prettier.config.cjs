// https://prettier.io/docs/en/configuration.html
//
// All properties are in alphabetical order so they're easy to find and insertions are consistent.
//
// This file uses the .js version so that code can be commented inline.
module.exports = {
    // Always is the default.
    //
    // This wouldn't be strong enough argument to override the default if it was different, but there are
    // languages (*cough* perl *cough*) where fat arrows '=>' are the same as commas at varying levels of
    // consistency, so always using parens can help readability for people with experience in those languages.
    //
    // It also keeps diffs smaller and more localized when inserting additional parameters.  If you add a second
    // parameter, it needs to do two insertions: the parens before the first parameter and the second parameter
    // and closing paren.  This isn't much of a concern, but it's nice to have if all other things are equal.
    arrowParens: "always",

    // Without this, the attributes in JSX flow into the content, and it can be hard to see the difference.
    // Granted, syntax colors make this less of a concern, but not all code viewers have syntax highlighting
    // (Bitbucket and Github kind of do, but they're pretty buggy) and not all developers have perfect color
    // vision.
    bracketSameLine: false,

    // Give it some breathing room...  No practical justifications for this.  I think it's easier to
    // read and it happens to the be the default, so great.
    bracketSpacing: true,

    // VSCode and modern editors all support LF, and that's what we need for Linux/OSX compatability.  The
    // files should be stored as LF in Git and should be checked out as LF, and git should not be configured
    // to auto convert the files when opening.  BASH and similar scripting languages will fail to execute
    // with file not found errors beacuse they can't find `/bin/bash\r`, but that '\r' won't be in the error
    // message.  This is nearly impossible to figure out if you haven't run into it before and has cost many
    // developers hundreds of hours, at the very minimum.
    //
    // If you change this, you should change .editorconfig as well.
    endOfLine: "lf",

    // CSS can override the behavior of <div> and <span>s so the CSS inference won't be as consistent as
    // you'd think.  Since we send all this code through Typescript compilation anyway, the meaning of
    // whitespace around tags has very little meaning, and developers should find more explicit ways of
    // ensuring that kind of whitespace is there.
    htmlWhitespaceSensitivity: "ignore",

    // Double quotes are more common and consistent with HTML attributes, allowing closer copy/pasting.
    jsxSingleQuote: false,

    // This isn't a hard value (see the prettier docs for more info).  100 is the default width of
    // VSCode on a 1080p monitor with the nav panel open and two vertical panes.
    printWidth: 130,

    // This is primarily done for markdown diffs in source control.  VSCode should be set to wrap
    // the prose.  If you break into multiple lines, it ends up meaning inserting a word or sentence
    // at the beginning of a line can cause the whole diff to break because every line changes in
    // a way differs aren't prepared for.
    //
    // For example:
    //
    //     This is really
    //     complex and needs
    //     specific attention
    //     ...
    //
    // You need to add "section" to the first line:
    //
    //     This section is
    //     really complex
    //     and needs specific
    //     attention...
    //
    // Differs won't realize that only one word got inserted.  They'll show all the rows as changed.
    //
    // If there's something specific for a given markdown file that the line break is important for,
    // [override it on a per file basis ](https://prettier.io/docs/en/configuration.html#configuration-overrides)
    proseWrap: "never",

    // There is no justification to stray from the default here.
    quoteProps: "as-needed",

    // There is a practical reason for this.  There are some really subtle "bugs" that can be caused
    // by not using semicolons where the developer doesn't realize the statement is joined with future
    // lines by the compiler.  Prettier (and Typescript) is smart(er) about that these days, but those
    // analyzers occasionally have bugs.  Better to completely avoid that issue.  For more information,
    // [prettier has examples](https://prettier.io/docs/en/rationale.html#semicolons) of these edge
    // cases.  You'll thank me when you don't spend hours trying to figure out why the code looks right
    // but doesn't run right.
    semi: true,

    // Using spaces with a tab width of 4 makes things consistent between Github, BitBucket,
    // and other source viewers.  2 is just too small, and is only really justified when there
    // are many levels, which doesn't happen in React/TSX with async/await instead of callbacks.
    // Quotation marks, bullets, and the start of tags (<>) is too close to reasonably see
    // indentation at a glance.
    //
    // If you change this, you should change .editorconfig as well.
    tabWidth: 2,

    // Always using trailing commas.  This allows for better source control, where an addition of a new
    // parameter on a new line at the end of a list doesn't require a change to the previous line.
    trailingComma: "all",

    // Although tabs allow individual users to configure their preferred indent level, at the time
    // of this writing, Bitbucket and other code review platforms have really poor support for that
    // and choose really weird default tab sizes that don't agree with each other.  Using spaces over
    // tabs means you get cross platform consistency.  And honestly, the choice is pretty arbitrary
    // given the capabilities of modern machines.
    //
    // If you change this, you should change .editorconfig as well.
    useTabs: false,
};
