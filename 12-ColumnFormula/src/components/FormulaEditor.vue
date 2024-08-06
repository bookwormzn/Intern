<template>
  <div class="editor-container">
    <textarea
      ref="formulaTextarea"
      v-model="formula"
      @mouseup="onMouseUp"
      @keydown="onKeyDown"
      rows="10"
      cols="50"
      class="formula-textarea"
    ></textarea>
    <div class="copy-model-container">
      <p>Copy Model:</p>
      <textarea
        v-model="copyModel"
        readonly
        rows="10"
        cols="50"
        class="copy-model-textarea"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: `AVG(balance_real)\nAVG(Æ$$.5131Æ)`,
      selectedText: '',
      copyModel: '',
      aliasMap: {
        'balance_real': 'Æ$$.5131Æ',
        'Æ$$.5131Æ': 'balance_real',
        // we can add more aliases this part
      },
    };
  },
  methods: {
    onMouseUp() {
      const textarea = this.$refs.formulaTextarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      this.selectedText = textarea.value.substring(start, end);
      this.updateCopyModel();
    },
    onKeyDown(event) {
      if (event.ctrlKey && event.key === 'c') {
        event.preventDefault();
        this.copyToClipboard(this.selectedText);
      }
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Metin panoya kopyalandı');
        })
        .catch(err => {
          console.error('Metin kopyalama başarısız: ', err);
        });
    },
    updateCopyModel() {
      let copyText = this.formula;
      for (const alias in this.aliasMap) {
        copyText = copyText.replace(alias, this.aliasMap[alias]);
      }
      this.copyModel = copyText;
    },
  },
  mounted() {
    document.addEventListener('copy', (event) => {
      if (this.selectedText) {
        event.clipboardData.setData('text/plain', this.selectedText);
        event.preventDefault();
        console.log('Metin Ctrl+C ile kopyalandı');
      }
    });
  },
};
</script>

<style scoped>
.editor-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #0ee43c; /* Light cyan background color */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.formula-textarea {
  margin-bottom: 20px;
  border: 2px solid #00796b; /* Darker cyan border color */
  border-radius: 8px;
  padding: 20px;
  background-color: white; /* White background for textarea */
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
}

.copy-model-container {
  width: 100%;
  max-width: 600px;
  background-color: white; /* White background for copy model container */
  padding: 20px;
  border: 10px solid #00796b; /* Darker cyan border color */
  border-radius: 8px;
}

.copy-model-textarea {
  width: 95%;
  border: none;
  background-color: white; /* Light green background for copy model textarea */
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
}
</style>
