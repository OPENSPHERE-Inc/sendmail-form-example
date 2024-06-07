"use client";
import { useRouter } from "next/navigation";

export default function Thanks() {
    const router = useRouter();

    return (
        <main>
            <div className="content">
                <h1 className="title is-3">メールを送信しました。お問い合わせありがとうございました。</h1>
                <div className="buttons is-centered">
                    <button type="button" className="button" onClick={() => router.back()}>戻る</button>
                </div>
            </div>
        </main>
    );
}
