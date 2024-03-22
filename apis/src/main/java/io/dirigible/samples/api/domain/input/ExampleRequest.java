package io.dirigible.samples.api.domain.input;

public class ExampleRequest {

	private String exampleId;
	private String exampleName;

	public String getExampleId() {
		return exampleId;
	}

	public void setExampleId(String exampleId) {
		this.exampleId = exampleId;
	}

	public String getExampleName() {
		return exampleName;
	}

	public void setExampleName(String exampleName) {
		this.exampleName = exampleName;
	}

	public ExampleRequest withExampleId(String exampleId) {
		setExampleId(exampleId);
		return this;
	}

	public ExampleRequest withExampleName(String exampleName) {
		setExampleName(exampleName);
		return this;
	}
}
