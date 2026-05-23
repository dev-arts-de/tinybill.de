import type { JsonLdObject } from "@/lib/json-ld";

type JsonLdProps = {
    data: JsonLdObject | ReadonlyArray<JsonLdObject>;
    id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
    const payload = Array.isArray(data) ? data : [data];
    return (
        <script
            type="application/ld+json"
            id={id}
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(payload),
            }}
        />
    );
}
