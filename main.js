window.onload = function() {
    var headers = {
        "key" : "Key",
        "phrase" : "Phrase",
    }

    function alphaOnly(event) {
        var textInput = document.getElementById("input-text").value;
        textInput = textInput.replace(/[^A-Za-z ]/g, "");
        document.getElementById("input-text").value = textInput;
    };

    function main() {
        var input = $("#input-text").val().toUpperCase();
        var key = parseInt($("#key-select").val());

        if ($("#method-select").val() === "Giai ma") {
            key = 26 - key;
        }

        var output = [];

        for (i = 0; i < input.length; i++) {
            var character = input.charCodeAt(i);

            if (character === 32) {
                output.push(' ');
                continue;
            }

            var cipherChar = (character - 65 + key) % 26;
            output.push(String.fromCharCode(cipherChar + 65));
        }

        $("#output-text").val(output.join(""));

    }


    $('#input-text').bind('input', alphaOnly);
    $("#button-encode").on("click", main);

    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }
}