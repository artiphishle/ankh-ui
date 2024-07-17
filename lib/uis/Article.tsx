"use client";

interface IArticle {
  h2?: string;
}

export function Article({h2 = 'Title'}: IArticle) {
  return (
    <article className="p-1">
      <header>
        <h2>{h2}</h2>
      </header>
      <p className="">
        This is a placeholder. The real article paragraph will be more dynamic.
      </p>
      <footer className="p-1">
        <small>
          <span>🕞 08:15h</span>
          <span>👤 Artiphishle</span>
        </small>
      </footer>
    </article>
  );
}
